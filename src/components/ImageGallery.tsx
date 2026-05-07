import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  altPrefix: string;
}

const ImageGallery = ({ images, altPrefix }: ImageGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            onClick={() => setOpenIndex(index)}
          >
            <img
              src={image}
              alt={`${altPrefix} - Imagem ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-[95vw] md:max-w-[90vw] w-fit p-0 bg-transparent border-0 shadow-none">
          {openIndex !== null && (
            <div className="relative flex items-center justify-center">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img
                src={images[openIndex]}
                alt={`${altPrefix} - Imagem ${openIndex + 1}`}
                className="max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-lg"
              />
              <button
                onClick={next}
                aria-label="Próxima"
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;

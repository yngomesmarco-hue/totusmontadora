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
        <DialogContent className="w-[94vw] max-w-[94vw] md:max-w-[90vw] p-0 bg-transparent border-0 shadow-none">
          {openIndex !== null && (
            <div className="relative flex flex-col items-center justify-center gap-4">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
                <img
                  src={images[openIndex]}
                  alt={`${altPrefix} - Imagem ${openIndex + 1}`}
                  className="mx-auto h-auto max-h-[78vh] w-full object-contain md:max-h-[90vh] md:w-auto md:max-w-full"
                />
              </div>
              <button
                onClick={next}
                aria-label="Próxima"
                className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex md:hidden items-center justify-center gap-5 rounded-full bg-black/75 px-5 py-2.5 text-white shadow-lg backdrop-blur-sm">
                <button
                  onClick={prev}
                  aria-label="Anterior"
                  className="rounded-full p-2 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="min-w-12 text-center text-sm font-medium">
                  {openIndex + 1}/{images.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Próxima"
                  className="rounded-full p-2 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;

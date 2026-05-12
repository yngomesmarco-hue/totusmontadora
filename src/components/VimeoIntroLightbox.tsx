import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

/** Mesmo vídeo dos depoimentos; hash sem o %22 que vinha no link compartilhado. */
const VIMEO_ID = "1190656947";
const VIMEO_HASH = "1e610e8173";

function introPlayerSrc() {
  const params = new URLSearchParams({
    h: VIMEO_HASH,
    badge: "0",
    autopause: "0",
    autoplay: "1",
    // Necessário na maioria dos navegadores para autoplay na carga da página; dá para ativar o som nos controles do Vimeo.
    muted: "1",
  });
  return `https://player.vimeo.com/video/${VIMEO_ID}?${params.toString()}`;
}

const VimeoIntroLightbox = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="z-[200]" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[201] w-[min(96vw,960px)] max-h-[90vh] translate-x-[-50%] translate-y-[-50%]",
            "border-0 bg-transparent p-0 shadow-none outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-200"
          )}
        >
          <DialogPrimitive.Title className="sr-only">Vídeo TOTUS Cenografia</DialogPrimitive.Title>
          <div className="relative overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/15">
            <div className="aspect-video w-full bg-black">
              {open ? (
                <iframe
                  src={introPlayerSrc()}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vídeo TOTUS Cenografia"
                />
              ) : null}
            </div>
            <DialogPrimitive.Close
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-white ring-1 ring-white/25 transition-colors hover:bg-black"
              aria-label="Fechar vídeo"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default VimeoIntroLightbox;

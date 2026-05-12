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
            "fixed inset-0 z-[201] flex items-center justify-center border-0 bg-transparent p-0 shadow-none outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-200"
          )}
        >
          <DialogPrimitive.Title className="sr-only">Vídeo TOTUS Cenografia</DialogPrimitive.Title>

          {/* Maior retângulo 9:16 que cabe na viewport — vídeo vertical, quase tela cheia, sem “letterbox” do container */}
          <div
            className={cn(
              "relative overflow-hidden bg-black",
              "h-[min(100dvh,calc(100vw*16/9))] w-[min(100vw,calc(100dvh*9/16))]"
            )}
          >
            {open ? (
              <iframe
                src={introPlayerSrc()}
                className="absolute inset-0 block h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vídeo TOTUS Cenografia"
              />
            ) : null}
          </div>

          <DialogPrimitive.Close
            className={cn(
              "absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-10",
              "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            )}
            aria-label="Fechar vídeo"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default VimeoIntroLightbox;
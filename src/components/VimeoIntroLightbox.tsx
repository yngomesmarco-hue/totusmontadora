import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
      <DialogContent className="w-[min(92vw,420px)] max-w-[min(92vw,420px)] p-0 bg-black border-0 shadow-none">
        {open ? (
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
            <div className="aspect-[9/16] w-full bg-black">
              <iframe
                src={introPlayerSrc()}
                className="h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vídeo TOTUS Cenografia"
              />
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default VimeoIntroLightbox;

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { vimeoIframeSrc } from "@/lib/vimeo";

type CaseVideoDialogProps = {
  videoUrl: string | null;
  onClose: () => void;
};

const CaseVideoDialog = ({ videoUrl, onClose }: CaseVideoDialogProps) => {
  const { t, language } = useLanguage();

  return (
    <Dialog open={videoUrl !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[min(92vw,420px,min(calc(85vh*9/16),100vw))] max-w-[min(92vw,420px,min(calc(85vh*9/16),100vw))] border-0 bg-black p-0 shadow-none [&>button]:text-white [&>button]:hover:opacity-100">
        {videoUrl ? (
          <div className="overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
            <div className="aspect-[9/16] w-full bg-black">
              <iframe
                key={videoUrl}
                title={t("leadership.caseVideoTitle")}
                src={vimeoIframeSrc(videoUrl, language)}
                className="h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default CaseVideoDialog;

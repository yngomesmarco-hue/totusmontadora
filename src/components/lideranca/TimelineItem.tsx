import { Link } from "react-router-dom";
import { Globe, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TimelineEntrySpec } from "@/data/liderancaTimeline";
import { cn } from "@/lib/utils";

export type ResolvedTimelineItem = TimelineEntrySpec & {
  title: string;
  paragraphs: string[];
};

type TimelineItemProps = {
  item: ResolvedTimelineItem;
  onOpenVideo: (url: string) => void;
};

const TimelineItem = ({ item, onOpenVideo }: TimelineItemProps) => {
  const { t } = useLanguage();

  const openVideo = () => {
    if (item.videoUrl) onOpenVideo(item.videoUrl);
  };

  return (
    <div className="relative animate-fade-in">
      <div className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] ring-4 ring-background sm:-left-[42px]" />

      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">{item.year}</p>
      <h3 className="mb-3 text-base font-bold sm:text-lg">{item.title}</h3>

      <div className="space-y-3 rounded-xl border border-primary/20 bg-card/40 p-4 sm:p-5">
        {item.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}

        {item.logo ? (
          <div className="pt-2">
            <img
              src={item.logo}
              alt={`Logo ${item.title}`}
              loading="lazy"
              className={cn(
                "h-9 w-auto max-w-full object-contain object-left sm:h-12 lg:h-14",
                item.logoInvert && "invert",
              )}
            />
          </div>
        ) : null}

        {item.photos && item.photos.length > 0 ? (
          <div className="flex flex-col gap-4 pt-2">
            {item.photos.map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={openVideo}
                aria-label={t(photo.captionKey)}
                className="group flex flex-col gap-2 text-left"
              >
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-primary/50 bg-black transition-all group-hover:border-primary group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.5)]">
                  <img
                    src={photo.src}
                    alt={t(photo.captionKey)}
                    loading="lazy"
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="text-xs leading-snug text-foreground/80 transition-colors group-hover:text-primary sm:text-sm">
                  {t(photo.captionKey)}
                </span>
              </button>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-4 pt-1">
          {item.videoUrl ? (
            <button
              type="button"
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
            >
              <Play className="h-3.5 w-3.5 shrink-0 fill-primary" />
              {t("leadership.caseCta")}
            </button>
          ) : null}

          {item.siteUrl ? (
            item.siteUrl.startsWith("/") ? (
              <Link
                to={item.siteUrl}
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
              >
                <Globe className="h-3.5 w-3.5" />
                {t("leadership.visitSite")}
              </Link>
            ) : (
              <a
                href={item.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
              >
                <Globe className="h-3.5 w-3.5" />
                {t("leadership.visitSite")}
              </a>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

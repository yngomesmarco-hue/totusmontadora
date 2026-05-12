import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import bgTestimonials from "@/assets/bg-testimonials.png";
import dennyaRonchi from "@/assets/dennya-ronchi.png";
import claudioCorrea from "@/assets/claudio-correa.png";
import dorotaGruszka from "@/assets/dorota-gruszka.png";
import lorenaCometaGaming from "@/assets/lorena-cometa-gaming.png";
import { useLanguage } from "@/contexts/LanguageContext";

/** Vimeo IDs + privacy hash (h=). Links enviados tinham %22 no final; removemos ao normalizar. */
const VIDEO_TESTIMONIALS = [
  { id: "1191299549", hash: "fadeee17f1" },
  { id: "1191300651", hash: "1be6e3f53c" },
  { id: "1191301035", hash: "2e4cda79b9" },
  { id: "1190656947", hash: "1e610e8173" },
] as const;

function vimeoEmbedSrc(id: string, hash: string, autoplay: boolean) {
  const params = new URLSearchParams({
    h: hash,
    badge: "0",
    autopause: "0",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

function vimeoPageUrl(id: string, hash: string) {
  return `https://vimeo.com/${id}?h=${encodeURIComponent(hash)}`;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [videoThumbs, setVideoThumbs] = useState<Record<string, string | undefined>>({});
  const { t } = useLanguage();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const testimonials = [
    {
      textKey: 'testimonials.1.text',
      author: "Dennya Ronchi",
      positionKey: 'testimonials.1.position',
      company: "EzzePay",
      image: dennyaRonchi,
    },
    {
      textKey: 'testimonials.2.text',
      author: "Claudio Corrêa",
      positionKey: 'testimonials.2.position',
      company: "ProntoPaga",
      image: claudioCorrea,
    },
    {
      textKey: 'testimonials.3.text',
      author: "Dorota Gruszka",
      positionKey: 'testimonials.3.position',
      company: "Booming Games",
      image: dorotaGruszka,
    },
    {
      textKey: 'testimonials.4.text',
      author: "Lorena",
      positionKey: 'testimonials.4.position',
      company: "Cometa Gaming",
      image: lorenaCometaGaming,
    },
  ];

  const videoCarouselItems = [...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS];

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      for (const v of VIDEO_TESTIMONIALS) {
        const key = `${v.id}-${v.hash}`;
        try {
          const page = vimeoPageUrl(v.id, v.hash);
          const res = await fetch(
            `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(page)}&maxwidth=480`
          );
          if (!res.ok) continue;
          const data = (await res.json()) as { thumbnail_url?: string };
          if (cancelled || !data.thumbnail_url) continue;
          setVideoThumbs((prev) => ({ ...prev, [key]: data.thumbnail_url }));
        } catch {
          /* fallback: gradient capa */
        }
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) nextTestimonial();
      else prevTestimonial();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      className="py-10 md:py-20 lg:py-32 bg-white relative"
      style={{
        backgroundImage: `url(${bgTestimonials})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-slate-950 px-2 md:px-4 leading-tight">
            {t('testimonials.title')}{" "}
            <span className="text-neon">{t('testimonials.titleHighlight')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div
            className="bg-card p-5 md:p-8 lg:p-12 rounded-lg border border-border relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-7 h-7 md:w-12 md:h-12 text-neon/20" />

            <div className="relative z-10">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className={idx === currentIndex ? "block" : "hidden"}
                >
                  <p className="text-base md:text-xl lg:text-2xl mb-5 md:mb-8 leading-relaxed">
                    "{t(item.textKey)}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.author}
                        loading="eager"
                        decoding="sync"
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl md:text-2xl font-bold text-neon">
                          {item.author.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-base md:text-lg">
                        {item.author}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {item.positionLabel ?? t(item.positionKey)} • {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 md:p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-neon w-6 md:w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 md:p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-4xl font-bold text-slate-950 leading-tight">
                {t('testimonials.video.headingBefore')}
                <span className="text-neon">{t('testimonials.video.headingHighlight')}</span>
                {t('testimonials.video.headingAfter')}
              </h3>
              <p className="text-sm md:text-base text-slate-700 mt-2">
                {t('testimonials.video.subtitle')}
              </p>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden md:left-auto md:right-auto md:mx-0 md:w-auto">
              <div className="flex w-max gap-4 md:gap-6 animate-marquee [animation-duration:28s] hover:[animation-play-state:paused]">
                {videoCarouselItems.map((video, index) => {
                  const key = `${video.id}-${video.hash}`;
                  const thumb = videoThumbs[key];
                  const slot = index % VIDEO_TESTIMONIALS.length;
                  const videoTitle = `${t('testimonials.videoItem')} ${String(slot + 1).padStart(2, '0')}`;
                  return (
                  <button
                    key={`${key}-${index}`}
                    type="button"
                    onClick={() => setSelectedVideoIndex(index % VIDEO_TESTIMONIALS.length)}
                    className="group relative w-[170px] sm:w-[200px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-950 text-left shadow-xl ring-1 ring-white/20 transition-transform hover:scale-[1.02]"
                  >
                    <div className="aspect-[9/16] bg-gradient-to-br from-slate-900 via-slate-800 to-black">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(132,255,0,0.22),transparent_35%),linear-gradient(180deg,transparent,rgba(0,0,0,0.82))]" />
                      <div className="absolute inset-x-0 top-0 h-24 bg-white/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-neon text-black shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-7 w-7 fill-current" />
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm md:text-base font-semibold text-white">{videoTitle}</p>
                        <p className="mt-1 text-xs md:text-sm text-white/65">Vimeo</p>
                      </div>
                    </div>
                  </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={selectedVideoIndex !== null} onOpenChange={(open) => !open && setSelectedVideoIndex(null)}>
        <DialogContent className="w-[min(92vw,420px)] max-w-[min(92vw,420px)] p-0 bg-black border-0 shadow-none">
          {selectedVideoIndex !== null && (
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
              <div className="aspect-[9/16] w-full bg-black">
                <iframe
                  key={`${VIDEO_TESTIMONIALS[selectedVideoIndex].id}-${VIDEO_TESTIMONIALS[selectedVideoIndex].hash}`}
                  title={`${t('testimonials.videoItem')} ${String(selectedVideoIndex + 1).padStart(2, '0')}`}
                  src={vimeoEmbedSrc(
                    VIDEO_TESTIMONIALS[selectedVideoIndex].id,
                    VIDEO_TESTIMONIALS[selectedVideoIndex].hash,
                    true
                  )}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Testimonials;

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import bgTestimonials from "@/assets/bg-testimonials.png";
import dennyaRonchi from "@/assets/dennya-ronchi.png";
import claudioCorrea from "@/assets/claudio-correa.png";
import dorotaGruszka from "@/assets/dorota-gruszka.png";
import lorenaCometaGaming from "@/assets/lorena-cometa-gaming.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
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

  const videoTestimonials = [
    "Depoimento em vídeo 01",
    "Depoimento em vídeo 02",
    "Depoimento em vídeo 03",
    "Depoimento em vídeo 04",
  ];

  const videoCarouselItems = [...videoTestimonials, ...videoTestimonials];

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
                        {t(item.positionKey)} • {item.company}
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
                Depoimentos em <span className="text-neon">vídeo</span>
              </h3>
              <p className="text-sm md:text-base text-slate-700 mt-2">
                Em breve, vídeos reais dos nossos clientes.
              </p>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden md:left-auto md:right-auto md:mx-0 md:w-auto">
              <div className="flex w-max gap-4 md:gap-6 animate-marquee [animation-duration:28s] hover:[animation-play-state:paused]">
                {videoCarouselItems.map((title, index) => (
                  <button
                    key={`${title}-${index}`}
                    type="button"
                    onClick={() => setSelectedVideoIndex(index % videoTestimonials.length)}
                    className="group relative w-[170px] sm:w-[200px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-950 text-left shadow-xl ring-1 ring-white/20 transition-transform hover:scale-[1.02]"
                  >
                    <div className="aspect-[9/16] bg-gradient-to-br from-slate-900 via-slate-800 to-black">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(132,255,0,0.28),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.75))]" />
                      <div className="absolute inset-x-0 top-0 h-24 bg-white/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-neon text-black shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-7 w-7 fill-current" />
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm md:text-base font-semibold text-white">{title}</p>
                        <p className="mt-1 text-xs md:text-sm text-white/65">Placeholder Vimeo</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={selectedVideoIndex !== null} onOpenChange={(open) => !open && setSelectedVideoIndex(null)}>
        <DialogContent className="w-[92vw] max-w-sm p-0 bg-transparent border-0 shadow-none">
          {selectedVideoIndex !== null && (
            <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl ring-1 ring-white/10">
              <div className="aspect-[9/16] bg-gradient-to-br from-slate-900 via-slate-800 to-black">
                <div className="h-full w-full flex flex-col items-center justify-center px-8 text-center">
                  <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neon text-black shadow-lg">
                    <Play className="h-8 w-8 fill-current" />
                  </span>
                  <p className="text-lg font-semibold text-white">
                    {videoTestimonials[selectedVideoIndex]}
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Aqui entra o player do Vimeo quando os links estiverem definidos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Testimonials;

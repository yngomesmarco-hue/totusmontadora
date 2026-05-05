import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import bgTestimonials from "@/assets/bg-testimonials.png";
import dennyaRonchi from "@/assets/dennya-ronchi.png";
import claudioCorrea from "@/assets/claudio-correa.png";
import dorotaGruszka from "@/assets/dorota-gruszka.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      author: "Cometa Gaming",
      positionKey: 'testimonials.4.position',
      company: "Cometa Gaming",
      image: null,
    },
  ];

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
      className="py-12 md:py-20 lg:py-32 bg-white relative"
      style={{
        backgroundImage: `url(${bgTestimonials})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-slate-950 px-4">
            {t('testimonials.title')}{" "}
            <span className="text-neon">{t('testimonials.titleHighlight')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div
            className="bg-card p-6 md:p-8 lg:p-12 rounded-lg border border-border relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 text-neon/20" />

            <div className="relative z-10">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className={idx === currentIndex ? "block" : "hidden"}
                >
                  <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

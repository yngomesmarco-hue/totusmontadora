import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import heroStand from "@/assets/stand-bet7k.png";
import logoTotus from "@/assets/logo-totus.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-6 pt-28 pb-8 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Column - Text Content (Mobile: Center aligned) */}
          <div className="space-y-5 md:space-y-8 animate-fade-in text-center md:text-left">
            {/* Logo TOTUS MONTADORA - Visible on all screens */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2 md:mb-8">
              <img src={logoTotus} alt="TOTUS Cenografia" className="h-10 md:h-16 w-auto" />
            </div>

            {/* Main Heading */}
            <h1 className="text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.14] md:leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              <span className="text-foreground">{t('hero.title1')}</span>
              <span className="text-neon">{t('hero.title2')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              {t('hero.subtitle')}
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-neon text-black hover:bg-neon/90 font-semibold text-sm md:text-lg px-7 md:px-8 py-4 md:py-6 rounded-lg glow-neon w-auto min-w-[220px] max-w-full md:min-w-0"
              onClick={() => navigate("/portfolio")}
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Right Column - Stand Image (Now visible on mobile too) */}
          <div className="relative animate-fade-in">
            <img
              src={heroStand}
              alt="Stand TOTUS"
              className="w-full max-w-[88%] md:max-w-none mx-auto h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

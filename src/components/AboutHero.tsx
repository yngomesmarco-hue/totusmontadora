import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import heroStand from "@/assets/stand-bet7k.png";
import logoTotus from "@/assets/logo-totus.png";
import standMobile from "@/assets/stand-mobile.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutHero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo TOTUS MONTADORA */}
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <img src={logoTotus} alt="TOTUS Cenografia" className="h-12 md:h-16 w-auto" />
            </div>

            {/* Main Heading */}
            <h1
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-left"
            >
              <span className="text-foreground">{t('aboutHero.title1')}</span>
              <span className="text-neon">{t('aboutHero.title2')}</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              className="md:text-lg text-foreground/80 max-w-xl leading-relaxed text-sm"
            >
              {t('aboutHero.paragraph1')}
            </p>

            <p
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              className="md:text-lg text-foreground/80 max-w-xl leading-relaxed text-sm"
            >
              {t('aboutHero.paragraph2')}
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="hidden md:inline-flex bg-neon text-black hover:bg-neon/90 font-semibold text-lg px-8 py-6 rounded-lg glow-neon"
              onClick={() => navigate("/portfolio")}
            >
              {t('hero.cta')}
            </Button>

            {/* Stand Image - Mobile Only */}
            <div className="mt-8 md:hidden space-y-6">
              <img src={standMobile} alt="Stand TOTUS" className="w-full h-auto object-contain" />
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-neon text-black hover:bg-neon/90 font-semibold text-sm px-7 py-4 rounded-lg glow-neon"
                  onClick={() => navigate("/portfolio")}
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Stand Image */}
          <div className="relative animate-fade-in hidden md:block">
            <img
              src={heroStand}
              alt="Stand TOTUS"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import heroStand from "@/assets/stand-bet7k.png";
import logoTotus from "@/assets/logo-totus.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content (Mobile: Center aligned) */}
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center md:text-left">
            {/* Logo TOTUS MONTADORA - Visible on all screens */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-8">
              <img src={logoTotus} alt="TOTUS Montadora" className="h-12 md:h-16 w-auto" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight md:leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              <span className="text-foreground">Criamos experiências únicas </span>
              <span className="text-neon">que inspiram, conectam e engajam</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl mx-auto md:mx-0 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              Soluções completas em stands para eventos, da concepção à execução, cuidamos de cada passo para o sucesso do seu evento
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-neon text-black hover:bg-neon/90 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg glow-neon w-full md:w-auto"
              onClick={() => {
                window.open("https://api.whatsapp.com/send?phone=5511962428997&text=Vi%20seu%20site%20e%20tenho%20interesse", "_blank");
              }}
            >
              Solicite um orçamento
            </Button>
          </div>

          {/* Right Column - Stand Image (Now visible on mobile too) */}
          <div className="relative animate-fade-in">
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

export default Hero;

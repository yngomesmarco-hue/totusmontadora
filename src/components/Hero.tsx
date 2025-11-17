import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import heroStand from "@/assets/hero-stand.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo BTOS MONTADORA */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 border-3 border-foreground rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-foreground">B</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground tracking-wider">BTOS</div>
                <div className="text-sm text-foreground tracking-widest">MONTADORA</div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Criamos experiências</span>
              <br />
              <span className="text-neon">únicas que inspiram,</span>
              <br />
              <span className="text-foreground">conectam e engajam</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/90 max-w-xl">
              Soluções completas em stands para eventos, da concepção à execução, 
              cuidamos de cada passo para o sucesso do seu evento
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-neon text-black hover:bg-neon/90 font-semibold text-lg px-8 py-6 rounded-lg glow-neon"
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicite um orçamento
            </Button>
          </div>

          {/* Right Column - Stand Image */}
          <div className="relative animate-fade-in hidden md:block">
            <img
              src={heroStand}
              alt="Stand BTOS"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

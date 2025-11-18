import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import heroStand from "@/assets/stand-bet7k.png";
import logoTotus from "@/assets/logo-totus.png";

const AboutHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo TOTUS MONTADORA */}
            <div className="flex items-center gap-3 mb-8">
              <img src={logoTotus} alt="TOTUS Montadora" className="h-32 w-auto" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              <span className="text-foreground">Conheça a TOTUS </span>
              <span className="text-neon">Montadora:</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              Na TOTUS, entendemos que um estande é muito mais do que uma estrutura física. É o ponto de encontro entre sua marca e seus clientes, a materialização da sua visão e a principal ferramenta para gerar negócios e conexões em feiras e eventos.
            </p>

            <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              Com anos de experiência no mercado, nos especializamos em transformar conceitos em realidade, criando espaços que não apenas se destacam visualmente, mas que são projetados para serem funcionais, acolhedores e, acima de tudo, eficazes.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-neon text-black hover:bg-neon/90 font-semibold text-lg px-8 py-6 rounded-lg glow-neon"
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#contato";
                }
              }}
            >
              Solicite um orçamento
            </Button>
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

import standImage from "@/assets/stand-3d-cometa.png";

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-black overflow-hidden">
      {/* Green light effects - similar to particle background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-1">BTOS</h2>
              <p className="text-sm text-white/60 tracking-widest">MONTADORA</p>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conheça a BTOS Montadora:
            </h1>
            
            {/* Description paragraphs */}
            <div className="space-y-4 text-white/80 text-base leading-relaxed">
              <p>
                Na BTOS, entendemos que um estande é muito mais do que uma estrutura física. É o ponto de encontro entre sua marca e seus clientes, a materialização da sua visão e a principal ferramenta para gerar negócios e conexões em feiras e eventos.
              </p>
              
              <p>
                Com anos de experiência no mercado, nos especializamos em transformar conceitos em realidade, criando espaços que não apenas se destacam visualmente, mas que são projetados para serem funcionais, acolhedores e, acima de tudo, eficazes.
              </p>
            </div>
          </div>

          {/* Right side - Stand image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={standImage} 
                alt="Stand 3D BTOS" 
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Glow effect around image */}
            <div className="absolute inset-0 bg-green-500/10 blur-3xl scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

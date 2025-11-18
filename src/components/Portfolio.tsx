import sigmaImage from "@/assets/stand-bet7k.png";
import lolaImage from "@/assets/logo-lola.png";
import automecImage from "@/assets/stand-construction.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "SIGMA AMÉRICAS 2024",
      image: sigmaImage,
    },
    {
      title: "AUTOMEC",
      image: automecImage,
    },
    {
      title: "SIGMA AMÉRICAS 2025",
      image: sigmaImage,
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-background">
      {/* Title */}
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          PORTFÓLIO
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl text-center w-full">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Banner with Text */}
      <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-12 border-y border-border/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xl md:text-2xl text-center text-black leading-relaxed">
            explore nossos projetos de sucesso e veja como transformamos visões em realidade. Cada stand para eventos que criamos é uma prova do nosso compromisso com a qualidade, inovação e personalização.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

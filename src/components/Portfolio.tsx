const Portfolio = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      title: "Stand Tecnologia",
      category: "Feira de Tecnologia 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
      title: "Espaço Premium",
      category: "Evento Corporativo",
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
      title: "Stand Interativo",
      category: "Expo Internacional",
    },
    {
      image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070",
      title: "Ambiente Moderno",
      category: "Congresso 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
      title: "Stand Executivo",
      category: "Summit Empresarial",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      title: "Espaço Networking",
      category: "Feira de Negócios",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-neon">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça alguns dos stands que transformamos em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neon">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

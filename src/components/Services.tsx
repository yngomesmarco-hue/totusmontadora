import { Lightbulb, Box, Users, Hammer, Megaphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Desenvolvimento do Projeto",
      description: "Criamos projetos personalizados que refletem a identidade da sua marca",
    },
    {
      icon: Box,
      title: "Imagens em 3D",
      description: "Visualize seu stand antes mesmo da montagem com renders realistas",
    },
    {
      icon: Users,
      title: "Mão de Obra e Contratações",
      description: "Equipe qualificada e profissional para garantir a execução perfeita",
    },
    {
      icon: Hammer,
      title: "Montagem do Stand",
      description: "Montagem ágil e precisa, cuidando de cada detalhe",
    },
    {
      icon: Megaphone,
      title: "Ações de Ativação",
      description: "Estratégias para engajar e conectar com seu público",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos exclusivos da concepção à execução
          </h2>
          <p className="text-xl text-neon font-semibold">
            Cuidamos de tudo!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-neon transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-neon/10">
                <service.icon className="w-8 h-8 text-neon" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

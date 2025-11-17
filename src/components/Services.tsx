import { Settings, Box, HardHat, Hammer, Rocket } from "lucide-react";
import standConstruction from "@/assets/stand-construction-2.png";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Desenvolvimento do Projeto",
      subtitle: "Transformamos suas ideias em projetos concretos",
      description: "Nosso serviço de desenvolvimento do projeto começa com uma compreensão profunda das suas necessidades e objetivos. Trabalhamos em estreita colaboração com você para criar um conceito de stand que não apenas atenda às suas expectativas, mas as supere. Desde o layout inicial até os detalhes finais, garantimos que cada aspecto do projeto seja cuidadosamente planejado para maximizar o impacto e a funcionalidade.",
    },
    {
      icon: Box,
      title: "Imagens em 3D",
      subtitle: "Visualize seu stand antes da montagem",
      description: "Com nosso serviço de imagens em 3D, você pode visualizar seu stand antes mesmo da montagem. Utilizamos tecnologia de ponta para criar representações detalhadas e realistas do seu projeto. Isso permite ajustes e refinamentos antecipados, garantindo que o resultado seja exatamente como você imaginou. Nossas imagens em 3D ajudam a comunicar claramente a visão do projeto a todas as partes envolvidas.",
    },
    {
      icon: HardHat,
      title: "Mão de Obra e Contratações",
      subtitle: "Equipe especializada para cada detalhe",
      description: "Garantimos que cada aspecto do seu stand seja montado por profissionais altamente qualificados. Nossa equipe de mão de obra e contratações inclui especialistas em montagem, eletricidade, carpintaria e outros serviços necessários para a construção do seu stand. Coordenamos todas as contratações extras, assegurando que o trabalho seja realizado com precisão e eficiência.",
    },
    {
      icon: Hammer,
      title: "Montagem do Stand",
      subtitle: "Montagem rápida e precisa para o sucesso do seu evento",
      description: "Nossa equipe de montagem é treinada para executar o projeto com rapidez e precisão, garantindo que seu stand esteja pronto a tempo para o evento. Utilizamos materiais de alta qualidade e técnicas avançadas de construção para garantir que cada stand seja robusto, seguro e esteticamente agradável. Estamos comprometidos em fornecer uma montagem impecável, que reflete a excelência da sua marca.",
    },
    {
      icon: Rocket,
      title: "Ações de Ativação",
      subtitle: "Engaje seu público com ações interativas",
      description: "Além de criar stands para eventos impressionantes, também oferecemos serviços de ativação para engajar e envolver seu público. Desenvolvemos ações interativas e experiências memoráveis que capturam a atenção dos visitantes e promovem a sua marca. Seja através de demonstrações ao vivo, atividades interativas ou distribuição de brindes, nossas ações de ativação são projetadas para maximizar o impacto do seu stand.",
    },
  ];

  return (
    <section id="sobre" className="relative">
      {/* Services Section with split layout */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Services List */}
        <div className="bg-background py-12 md:py-16">
          <div className="space-y-12 px-6 md:px-12 lg:px-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <service.icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neon mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-foreground font-medium mb-3">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-foreground/80 leading-relaxed">
                  {service.description}
                </p>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-8 border-t border-border/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative min-h-[600px] md:min-h-screen">
          <img
            src={standConstruction}
            alt="Montagem de Stand"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

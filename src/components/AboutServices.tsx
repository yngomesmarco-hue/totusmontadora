import { Brain, Users, Clock, Leaf } from "lucide-react";
import constructionImage from "@/assets/stand-construction-2.png";

const AboutServices = () => {
  const features = [
    {
      icon: Brain,
      title: "Neuro-Arquitetura:",
      description: "Neuro-Arquitetura aplicada para que ambientes influenciem no comportamento e tempo de permanência dos visitantes."
    },
    {
      icon: Users,
      title: "Estratégia de Engajamento:",
      description: "Cada área é pensada estrategicamente para gerar máximo impacto e converter visitantes em clientes."
    },
    {
      icon: Clock,
      title: "Entregas no prazo:",
      description: "Cumprimos prazos rigorosamente, garantindo que seu estande esteja pronto quando você precisar."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade:",
      description: "Materiais e práticas sustentáveis sempre que possível, reduzindo o impacto ambiental."
    }
  ];

  return (
    <section className="bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Do Papel À Vida
            </h2>
            
            <p className="text-white/80 text-lg leading-relaxed">
              Através de uma cuidadosa seleção de materiais e técnicas construtivas, transformamos cada projeto em uma experiência única. Do conceito à finalização, nossa equipe de especialistas acompanha de perto cada etapa, garantindo a integração perfeita entre design e funcionalidade.
            </p>

            {/* Features List */}
            <div className="space-y-6 mt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-neon/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-neon" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-neon font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Construction Image */}
          <div className="relative h-full min-h-[700px]">
            <img 
              src={constructionImage} 
              alt="Construção de stand" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;

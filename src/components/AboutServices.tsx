import { Brain, Frame, Lightbulb, Wrench } from "lucide-react";
import standConstruction from "@/assets/stand-construction.jpg";

const AboutServices = () => {
  const services = [
    {
      icon: Brain,
      title: "Neuro-Arquitetura:",
      description: "Neuro-Arquitetura aplicada para que ambientes influenciem no comportamento e tempo de permanência."
    },
    {
      icon: Frame,
      title: "Framing:",
      description: "Criação de pontos instagramáveis que ampliam a presença digital e destacam a exclusividade."
    },
    {
      icon: Lightbulb,
      title: "Iluminação Técnica:",
      description: "Destaque intencional de produtos, gerando exclusividade e valor."
    },
    {
      icon: Wrench,
      title: "Estruturas Robustas:",
      description: "Imponência, autoridade e durabilidade para a marca em grandes feiras."
    }
  ];

  const materials = [
    {
      icon: Wrench,
      title: "Acabamentos Premium:",
      description: "ACM, MDF, Acrílico, pintura automotiva e iluminação embutida. Todos valorizando sua marca."
    },
    {
      icon: Brain,
      title: "Wayfinding Estratégico:",
      description: "Fluxo natural que conduz visitantes pelos pontoschave da marca."
    }
  ];

  return (
    <section className="py-20 bg-background">
      {/* Do Papel À Vida Section */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Services */}
        <div className="bg-background py-16 md:py-20">
          <div className="space-y-12 px-6 md:px-12 lg:px-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Do Papel À Vida
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Através de uma cuidadosa seleção de materiais e técnicas construtivas, transformamos cada projeto em uma experiência única. Do conceito à finalização, nossa equipe de especialistas acompanha de perto cada etapa, garantindo a integração perfeita entre design e funcionalidade.
              </p>
            </div>

            {services.map((service, index) => (
              <div key={index} className="border-t border-border/20 pt-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <service.icon className="w-12 h-12 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neon mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {materials.map((material, index) => (
              <div key={index} className="border-t border-border/20 pt-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <material.icon className="w-12 h-12 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neon mb-2">
                      {material.title}
                    </h3>
                    <p className="text-foreground">
                      {material.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[600px] md:h-full">
          <img
            src={standConstruction}
            alt="Stand em Construção"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutServices;

import { Award, Lightbulb, Cog } from "lucide-react";
const AboutDifferentials = () => {
  const differentials = [{
    icon: Award,
    title: "Qualidade e Profissionalismo",
    description: "Trabalhamos em estreita colaboração com os clientes para garantir que cada detalhe seja cuidadosamente planejado e executado. Nosso compromisso com a qualidade vai além do design visual, resultando em stands para eventos que não apenas impressionam, mas também envolvem e inspiram. Cada projeto é tratado com a máxima seriedade e dedicação, garantindo um resultado que reflete a excelência da TOTUS Cenografia."
  }, {
    icon: Lightbulb,
    title: "Compromisso com a Personalização",
    description: "Cada cliente é único, e tratamos cada projeto com a atenção e cuidado que ele merece. Na TOTUS Cenografia, você não receberá soluções genéricas. Nosso serviço é totalmente personalizado, adaptado às suas necessidades e objetivos específicos. Desde o conceito inicial até a execução final, garantimos que seu stand seja um reflexo perfeito da sua visão e identidade."
  }, {
    icon: Cog,
    title: "Inovação e Criatividade",
    description: "Estamos sempre buscando novas formas de impressionar e surpreender. Com uma equipe talentosa e apaixonada pela inovação, podemos transformar até mesmo as ideias mais ousadas em realidade. Nossos stands são projetados para se destacar e deixar uma impressão duradoura, combinando criatividade e tecnologia de ponta para criar experiências verdadeiramente únicas."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground text-3xl">
          Nossos diferenciais: inovação e profissionalismo para resultados extraordinários
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {differentials.map((item, index) => <div key={index} className="bg-card border border-border rounded-lg p-8 hover:border-neon transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-neon">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed text-xs">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutDifferentials;
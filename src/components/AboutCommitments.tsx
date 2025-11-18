import { useState } from "react";
import { ChevronDown, Trophy } from "lucide-react";
const AboutCommitments = () => {
  const [openSection, setOpenSection] = useState<string>("valores");
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-foreground">
          Compromissos que guiam nosso trabalho
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-sm">
          Na TOTUS Cenografia, nossos princípios são a base que orienta todas as nossas ações e decisões. Nossa missão, visão e valores refletem nosso compromisso com a excelência, inovação e personalização, garantindo que cada projeto não só atenda, mas supere as expectativas dos nossos clientes.
        </p>

        <div className="space-y-4">
          {/* Missão */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button onClick={() => toggleSection("missao")} className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openSection === "missao" ? "bg-neon text-black" : "bg-card text-foreground hover:bg-card/80"}`}>
              <span className="text-xl font-bold flex items-center gap-2">
                {openSection === "missao" ? "−" : "+"} Missão
              </span>
            </button>
            {openSection === "missao" && <div className="bg-background border-t border-border p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-neon">
                        <path fill="currentColor" d="M50,10 L35,35 L10,35 L30,55 L20,80 L50,60 L80,80 L70,55 L90,35 L65,35 Z M50,25 L60,45 L75,45 L62,55 L68,70 L50,57 L32,70 L38,55 L25,45 L40,45 Z" />
                        <rect x="45" y="75" width="10" height="15" fill="currentColor" />
                        <rect x="35" y="85" width="30" height="5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed text-xs">
                      Nossa missão é transformar ideias em experiências únicas e memoráveis, criando stands de alta qualidade que inspirem e engajem os públicos dos nossos clientes. Buscamos oferecer soluções completas e personalizadas, combinando inovação, criatividade e excelência em cada projeto.
                    </p>
                  </div>
                </div>
              </div>}
          </div>

          {/* Visão */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button onClick={() => toggleSection("visao")} className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openSection === "visao" ? "bg-neon text-black" : "bg-card text-foreground hover:bg-card/80"}`}>
              <span className="text-xl font-bold flex items-center gap-2">
                {openSection === "visao" ? "−" : "+"} Visão
              </span>
            </button>
            {openSection === "visao" && <div className="bg-background border-t border-border p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-neon">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="4" />
                        <circle cx="50" cy="50" r="8" fill="currentColor" />
                        <path d="M 20,30 L 30,20 M 80,30 L 70,20 M 20,70 L 30,80 M 80,70 L 70,80" stroke="currentColor" strokeWidth="4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed text-xs">
                      Ser reconhecida como a principal empresa de montagem de stands no mercado, conhecida pela nossa capacidade de inovação, atenção aos detalhes e comprometimento com a satisfação do cliente. Queremos estabelecer parcerias duradouras, impactando positivamente cada evento que realizamos e destacando a importância de ambientes bem projetados.
                    </p>
                  </div>
                </div>
              </div>}
          </div>

          {/* Valores */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button onClick={() => toggleSection("valores")} className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openSection === "valores" ? "bg-neon text-black" : "bg-card text-foreground hover:bg-card/80"}`}>
              <span className="text-xl font-bold flex items-center gap-2">
                {openSection === "valores" ? "−" : "+"} Valores
              </span>
            </button>
            {openSection === "valores" && <div className="bg-background border-t border-border p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Trophy className="w-20 h-20 text-neon" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        Excelência: Compromisso com a qualidade e perfeição em todos os aspectos do nosso trabalho.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        Inovação: Busca constante por novas ideias e soluções criativas que diferenciem nossos projetos.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        Personalização: Atendimento exclusivo e adaptação dos nossos serviços às necessidades e objetivos específicos de cada cliente.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        Profissionalismo: Conduta ética, transparência e respeito em todas as nossas interações e projetos.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs text-left">
                        Paixão: Dedicação e entusiasmo em transformar ideias em experiências que deixem uma marca duradoura.
                      </p>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => window.open("https://api.whatsapp.com/send?phone=5511962428997&text=Vi%20seu%20site%20e%20tenho%20interesse", "_blank")}
            className="bg-neon text-black hover:bg-neon/90 font-bold text-lg px-12 py-4 rounded-md glow-neon transition-all"
          >
            Solicite um orçamento
          </button>
        </div>
      </div>
    </section>;
};
export default AboutCommitments;
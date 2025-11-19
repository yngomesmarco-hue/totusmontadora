import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import bgTestimonials from "@/assets/bg-testimonials.png";
import dennyaRonchi from "@/assets/dennya-ronchi.png";
import claudioCorrea from "@/assets/claudio-correa.png";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    text: "Passando aqui para agradecer pelo suporte que vocês me deram com relação ao estande. A execução ficou de acordo com projeto que foi feito, ficamos satisfeitos com o resultado, tivemos muitos elogios. Vamos para os próximos!",
    author: "Dennya Ronchi",
    position: "Financeiro Administrativo",
    company: "EzzePay",
    image: dennyaRonchi
  }, {
    text: "A qualidade e experiência dos profissionais envolvidos, desde a fase inicial do projeto até a entrega do nosso stand, foram excepcionais. O time da BTOS foi presente e solícito em todas as fases: pré, durante e pós-evento, um grande diferencial. O resultado foi ainda melhor, os nossos visitantes adoraram o stand e nós, como empresa, ficamos encantados ao ver nosso conceito e marca sendo transmitidos em cada um dos detalhes.",
    author: "Claudio Corrêa",
    position: "Country Manager Brazil",
    company: "ProntoPaga",
    image: claudioCorrea
  }, {
    text: "Trabalhar com a TOTUS foi uma experiência incrível. Desde o primeiro contato até a desmontagem, tudo foi perfeito. Recomendo fortemente!",
    author: "Ana Paula",
    position: "Gerente de Eventos",
    company: "Premium Brands"
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-12 md:py-20 lg:py-32 bg-white relative" style={{
    backgroundImage: `url(${bgTestimonials})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-slate-950 px-4">
            Experiências reais de quem confiou na{" "}
            <span className="text-neon">TOTUS Cenografia</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div className="bg-card p-6 md:p-8 lg:p-12 rounded-lg border border-border relative">
            <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 text-neon/20" />

            <div className="relative z-10">
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-3 md:gap-4">
                {testimonials[currentIndex].image ? (
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl font-bold text-neon">
                      {testimonials[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-base md:text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {testimonials[currentIndex].position} •{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
            <button onClick={prevTestimonial} className="p-2 md:p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon">
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentIndex === index ? "bg-neon w-6 md:w-8" : "bg-muted"}`} />)}
            </div>
            <button onClick={nextTestimonial} className="p-2 md:p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon">
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;
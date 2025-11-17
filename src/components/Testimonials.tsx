import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import bgTestimonials from "@/assets/bg-testimonials.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "A TOTUS superou todas as nossas expectativas. O stand ficou exatamente como no projeto 3D, com acabamento impecável e montagem rápida.",
      author: "Maria Silva",
      position: "Diretora de Marketing",
      company: "Tech Innovations",
    },
    {
      text: "Profissionalismo e atenção aos detalhes em cada etapa. Nossa presença no evento foi um sucesso absoluto graças ao trabalho excepcional da equipe.",
      author: "João Santos",
      position: "CEO",
      company: "Global Solutions",
    },
    {
      text: "Trabalhar com a TOTUS foi uma experiência incrível. Desde o primeiro contato até a desmontagem, tudo foi perfeito. Recomendo fortemente!",
      author: "Ana Paula",
      position: "Gerente de Eventos",
      company: "Premium Brands",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="py-20 md:py-32 bg-white relative"
      style={{
        backgroundImage: `url(${bgTestimonials})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experiências reais de quem confiou na{" "}
            <span className="text-neon">TOTUS Montadora</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-neon/20" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-neon">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position} •{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-neon w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

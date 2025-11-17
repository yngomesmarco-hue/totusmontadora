import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Criamos experiências únicas",
      subtitle: "que inspiram, conectam e engajam",
    },
    {
      title: "Projetos exclusivos",
      subtitle: "da concepção à execução",
    },
    {
      title: "Stands que impressionam",
      subtitle: "em cada detalhe",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
            <br />
            <span className="text-neon">{slides[currentSlide].subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Soluções completas em stands para eventos, da concepção à execução,
            cuidamos de cada passo para o sucesso do seu evento
          </p>
          <Button
            size="lg"
            className="bg-neon text-black hover:bg-neon/90 font-semibold text-lg px-8 py-6 glow-neon"
            onClick={() => {
              const element = document.getElementById("contato");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solicite um orçamento
          </Button>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-neon w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

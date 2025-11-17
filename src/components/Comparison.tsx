import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Comparison = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comparisons = [
    {
      render: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
      real: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      title: "Stand Corporativo",
    },
    {
      render: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070",
      real: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
      title: "Espaço de Tecnologia",
    },
    {
      render: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      real: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
      title: "Área de Networking",
    },
  ];

  const nextComparison = () => {
    setCurrentIndex((prev) => (prev + 1) % comparisons.length);
  };

  const prevComparison = () => {
    setCurrentIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);
  };

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comparação <span className="text-neon">3D vs Realidade</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Prova da Excelência em stands para eventos!
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={comparisons[currentIndex].render}
                alt="Render 3D"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-neon font-semibold text-lg">Render 3D</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={comparisons[currentIndex].real}
                alt="Resultado Real"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-neon font-semibold text-lg">Resultado Real</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevComparison}
              className="p-3 rounded-full bg-card hover:bg-neon hover:text-black transition-all border border-neon"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-center">
              <p className="text-lg font-semibold">{comparisons[currentIndex].title}</p>
              <p className="text-sm text-muted-foreground">
                {currentIndex + 1} de {comparisons.length}
              </p>
            </div>
            <button
              onClick={nextComparison}
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

export default Comparison;

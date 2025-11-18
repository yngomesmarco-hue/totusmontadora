import { useState, useRef, useEffect } from "react";
import stand3dProntoPaga from "@/assets/stand-3d-prontopaga.png";
import standRealProntoPaga from "@/assets/stand-real-prontopaga.png";
import stand3dCometa from "@/assets/stand-3d-cometa.png";
import standRealCometa from "@/assets/stand-real-cometa.png";
const ComparisonSlider = ({
  image3d,
  imageReal
}: {
  image3d: string;
  imageReal: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = x / rect.width * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);
  return <div ref={containerRef} className="relative w-full aspect-[16/9] overflow-hidden rounded-lg cursor-ew-resize select-none" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}>
      {/* Stand Real (Background) */}
      <div className="absolute inset-0">
        <img src={imageReal} alt="Stand Real" className="w-full h-full object-cover" draggable="false" />
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
          <span className="text-foreground font-semibold text-sm">Stand</span>
        </div>
      </div>

      {/* Projeto 3D (Foreground with clip) */}
      <div className="absolute inset-0 transition-none" style={{
      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
    }}>
        <img src={image3d} alt="Projeto 3D" className="w-full h-full object-cover" draggable="false" />
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
          <span className="text-foreground font-semibold text-sm">Projeto 3D</span>
        </div>
      </div>

      {/* Slider Line */}
      <div className="absolute top-0 bottom-0 w-1 bg-neon cursor-ew-resize" style={{
      left: `${sliderPosition}%`,
      transform: 'translateX(-50%)'
    }}>
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-neon rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-background"></div>
            <div className="w-0.5 h-6 bg-background"></div>
          </div>
        </div>
      </div>
    </div>;
};
const Comparison = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl font-bold mb-4 text-center text-2xl">
            Prova da Excelência em stands para eventos! <span className="text-neon font-sans">stands para eventos!</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm">
            Veja as fotos com o antes e depois e comprove como nossos projetos 3D se transformam em stands para eventos perfeitos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* ProntoPaga Comparison */}
          <ComparisonSlider image3d={stand3dProntoPaga} imageReal={standRealProntoPaga} />

          {/* Cometa Gaming Comparison */}
          <ComparisonSlider image3d={stand3dCometa} imageReal={standRealCometa} />
        </div>

        {/* Ver Mais Projetos Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => window.location.href = "/portfolio"}
            className="bg-neon text-black hover:bg-neon/90 font-bold text-lg px-12 py-4 rounded-md glow-neon transition-all"
          >
            VER MAIS PROJETOS!
          </button>
        </div>
      </div>
    </section>;
};
export default Comparison;
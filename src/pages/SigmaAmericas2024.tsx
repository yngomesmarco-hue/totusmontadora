import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pipolImage from "@/assets/sigma2024/pipol-1.png";
import xnextImage from "@/assets/sigma2024/xnext-1.png";
import cafImage from "@/assets/sigma2024/caf.png";
import cactusImage from "@/assets/sigma2024/cactus.png";
import prontopagaImage from "@/assets/sigma2024/prontopaga.png";
import ezzepayImage from "@/assets/sigma2024/ezzepay.png";
import bet7kImage from "@/assets/sigma2024/bet7k.png";
import boomingGamesImage from "@/assets/sigma2024/booming-games.png";
import awareImage from "@/assets/sigma2024/aware.png";

const SigmaAmericas2024 = () => {
  const images = [
    pipolImage,
    xnextImage,
    cafImage,
    cactusImage,
    prontopagaImage,
    ezzepayImage,
    bet7kImage,
    boomingGamesImage,
    awareImage,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
            Sigma Américas 2024
          </h1>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Sigma Américas 2024 - Imagem ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SigmaAmericas2024;

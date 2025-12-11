import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image1 from "@/assets/sigma2025/image-1.jpg";
import image2 from "@/assets/sigma2025/image-2.jpg";
import image3 from "@/assets/sigma2025/image-3.jpg";
import image4 from "@/assets/sigma2025/image-4.jpg";
import image5 from "@/assets/sigma2025/image-5.jpg";
import image6 from "@/assets/sigma2025/image-6.jpg";
import image7 from "@/assets/sigma2025/image-7.jpg";
import image8 from "@/assets/sigma2025/image-8.jpg";
import image9 from "@/assets/sigma2025/image-9.jpg";
import image10 from "@/assets/sigma2025/image-10.jpg";
import image11 from "@/assets/sigma2025/image-11.jpg";
import image12 from "@/assets/sigma2025/image-12.jpg";
import image13 from "@/assets/sigma2025/image-13.jpg";
import image14 from "@/assets/sigma2025/image-14.jpg";
import image15 from "@/assets/sigma2025/image-15.jpg";

const SigmaAmericas2025 = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
            Sigma Américas 2025
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
                  alt={`Sigma Américas 2025 - Imagem ${index + 1}`}
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

export default SigmaAmericas2025;

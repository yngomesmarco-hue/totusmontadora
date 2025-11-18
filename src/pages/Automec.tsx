import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image1 from "@/assets/automec/image-1.png";
import image2 from "@/assets/automec/image-2.png";
import image3 from "@/assets/automec/image-3.png";
import image4 from "@/assets/automec/image-4.png";
import image5 from "@/assets/automec/image-5.png";
import image6 from "@/assets/automec/image-6.png";
import image7 from "@/assets/automec/image-7.png";
import image8 from "@/assets/automec/image-8.png";
import image9 from "@/assets/automec/image-9.png";
import image10 from "@/assets/automec/image-10.png";
import image11 from "@/assets/automec/image-11.png";
import image12 from "@/assets/automec/image-12.png";
import image13 from "@/assets/automec/image-13.png";
import image14 from "@/assets/automec/image-14.png";
import image15 from "@/assets/automec/image-15.png";
import image16 from "@/assets/automec/image-16.png";

const Automec = () => {
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
    image16,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
            Automec
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
                  alt={`Automec - Imagem ${index + 1}`}
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

export default Automec;

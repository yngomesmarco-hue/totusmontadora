import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import image1 from "@/assets/automec/image-1.jpg";
import image2 from "@/assets/automec/image-2.jpg";
import image3 from "@/assets/automec/image-3.jpg";
import image4 from "@/assets/automec/image-4.jpg";
import image5 from "@/assets/automec/image-5.jpg";
import image6 from "@/assets/automec/image-6.jpg";
import image7 from "@/assets/automec/image-7.jpg";
import image8 from "@/assets/automec/image-8.jpg";

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

          <ImageGallery images={images} altPrefix="Automec" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Automec;

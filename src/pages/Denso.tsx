import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/contexts/LanguageContext";
import image1 from "@/assets/denso/image-01.jpg";
import image2 from "@/assets/denso/image-02.jpg";
import image3 from "@/assets/denso/image-03.jpg";
import image4 from "@/assets/denso/image-04.jpg";
import image5 from "@/assets/denso/image-05.jpg";
import image6 from "@/assets/denso/image-06.jpg";
import image7 from "@/assets/denso/image-07.jpg";
import image8 from "@/assets/denso/image-08.jpg";
import image9 from "@/assets/denso/image-09.jpg";
import image10 from "@/assets/denso/image-10.jpg";

const Denso = () => {
  const { t } = useLanguage();
  const title = t("portfolio.denso");
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-16">{title}</h1>

          <ImageGallery images={images} altPrefix={title} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Denso;

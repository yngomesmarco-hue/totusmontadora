import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import image1 from "@/assets/sbc2026/image-1.png";
import image2 from "@/assets/sbc2026/image-2.png";
import image3 from "@/assets/sbc2026/image-3.png";
import image4 from "@/assets/sbc2026/image-4.png";
import image5 from "@/assets/sbc2026/image-5.png";
import image6 from "@/assets/sbc2026/image-6.png";
import image7 from "@/assets/sbc2026/image-7.png";
import image8 from "@/assets/sbc2026/image-8.jpeg";
import image9 from "@/assets/sbc2026/image-9.jpeg";
import image10 from "@/assets/sbc2026/image-10.jpeg";
import image11 from "@/assets/sbc2026/image-11.jpeg";
import image12 from "@/assets/sbc2026/image-12.jpeg";
import image13 from "@/assets/sbc2026/image-13.jpeg";
import image14 from "@/assets/sbc2026/image-14.jpeg";
import image15 from "@/assets/sbc2026/image-15.jpeg";
import image16 from "@/assets/sbc2026/image-16.jpeg";

import { BRAND_COPY } from "@/constants/brandCopy";

const SBCSummitRio2026 = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];
  const title = BRAND_COPY.portfolioSbcRioSummit2026;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
            {title}
          </h1>

          <ImageGallery images={images} altPrefix={title} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SBCSummitRio2026;

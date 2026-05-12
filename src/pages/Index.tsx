import Header from "@/components/Header";
import VimeoIntroLightbox from "@/components/VimeoIntroLightbox";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VimeoIntroLightbox />
      <Header />
      <Hero />
      <LogoSlider />
      <Services />
      <Comparison />
      <ContactForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

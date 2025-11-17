import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoSlider />
      <Services />
      <Comparison />
      <Portfolio />
      <ContactForm />
      <VideoGallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

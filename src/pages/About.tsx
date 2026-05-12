import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutDifferentials from "@/components/AboutDifferentials";
import AboutCommitments from "@/components/AboutCommitments";
import AboutServices from "@/components/AboutServices";
import LogoSlider from "@/components/LogoSlider";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <AboutHero />
      <LogoSlider />
      <AboutServices />
      <AboutDifferentials />
      <AboutCommitments />
      <Footer />
    </div>
  );
};

export default About;

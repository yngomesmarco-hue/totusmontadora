import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sigma2024Image from "@/assets/sigma-americas-2024.png";
import automecImage from "@/assets/automec.png";
import sigma2025Image from "@/assets/sigma-americas-2025.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "portfolio.sigma2024",
      image: sigma2024Image,
      link: "/portfolio/sigma-americas-2024",
    },
    {
      titleKey: "portfolio.automec",
      image: automecImage,
      link: "/portfolio/automec",
    },
    {
      titleKey: "portfolio.sigma2025",
      image: sigma2025Image,
      link: "/portfolio/sigma-americas-2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32">
        <section className="py-16">
          {/* Title */}
          <div className="container mx-auto px-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="container mx-auto px-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
                  onClick={() => project.link && navigate(project.link)}
                >
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl text-center w-full">
                      {t(project.titleKey)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width Banner with Text */}
          <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-12 border-y border-border/20">
            <div className="container mx-auto px-6 max-w-5xl">
              <p className="text-xl md:text-2xl text-center text-black leading-relaxed">
                {t('portfolio.banner')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;

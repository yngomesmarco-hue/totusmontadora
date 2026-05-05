import { Settings, Box, HardHat, Hammer, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import standConstruction from "@/assets/stand-construction-2.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Settings,
      titleKey: 'services.project.title',
      subtitleKey: 'services.project.subtitle',
      descriptionKey: 'services.project.description'
    },
    {
      icon: Box,
      titleKey: 'services.3d.title',
      subtitleKey: 'services.3d.subtitle',
      descriptionKey: 'services.3d.description'
    },
    {
      icon: HardHat,
      titleKey: 'services.labor.title',
      subtitleKey: 'services.labor.subtitle',
      descriptionKey: 'services.labor.description'
    },
    {
      icon: Hammer,
      titleKey: 'services.assembly.title',
      subtitleKey: 'services.assembly.subtitle',
      descriptionKey: 'services.assembly.description'
    },
    {
      icon: Rocket,
      titleKey: 'services.activation.title',
      subtitleKey: 'services.activation.subtitle',
      descriptionKey: 'services.activation.description'
    }
  ];

  return (
    <section id="sobre" className="relative">
      {/* Services Section with split layout */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Services List */}
        <div className="bg-background py-16 md:py-20">
          <div className="space-y-12 px-6 md:px-12 lg:px-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <service.icon className="w-16 h-16 md:w-20 md:h-20 text-foreground" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-neon mb-4">
                  {t(service.titleKey)}
                </h3>

                {/* Subtitle */}
                <p className="text-foreground font-medium mb-6 text-base md:text-lg">
                  {t(service.subtitleKey)}
                </p>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                  {t(service.descriptionKey)}
                </p>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-12 mb-12 border-t border-border/30"></div>
                )}
              </div>
            ))}
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                onClick={() => navigate("/portfolio")}
                className="bg-neon text-black hover:bg-neon/90 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg glow-neon"
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative min-h-[600px] md:min-h-screen">
          <img
            src={standConstruction}
            alt="Montagem de Stand"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

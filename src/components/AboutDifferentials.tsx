import { Award, Lightbulb, Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutDifferentials = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const differentials = [
    {
      icon: Award,
      titleKey: 'aboutDifferentials.quality.title',
      descriptionKey: 'aboutDifferentials.quality.description',
    },
    {
      icon: Lightbulb,
      titleKey: 'aboutDifferentials.personalization.title',
      descriptionKey: 'aboutDifferentials.personalization.description',
    },
    {
      icon: Cog,
      titleKey: 'aboutDifferentials.innovation.title',
      descriptionKey: 'aboutDifferentials.innovation.description',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-10 md:mb-12">
          <Button
            size="lg"
            className="bg-neon text-black hover:bg-neon/90 font-semibold text-sm md:text-lg px-7 md:px-8 py-4 md:py-6 rounded-lg glow-neon"
            onClick={() => navigate("/portfolio")}
          >
            {t('hero.cta')}
          </Button>
        </div>

        <h2 className="md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground text-3xl">
          {t('aboutDifferentials.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-neon transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-neon">
                {t(item.titleKey)}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed text-xs">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDifferentials;

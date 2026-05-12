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
    <section className="bg-background pb-20 pt-8 md:-mt-4 md:pt-12">
      <div className="container mx-auto max-w-full px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:mb-10 md:text-4xl lg:text-5xl">
          {t('aboutDifferentials.title')}
        </h2>

        <div className="mb-10 flex justify-center md:mb-12">
          <Button
            size="lg"
            className="rounded-lg bg-neon px-7 py-4 text-sm font-semibold text-black glow-neon hover:bg-neon/90 md:px-8 md:py-6 md:text-lg"
            onClick={() => navigate("/portfolio")}
          >
            {t('hero.cta')}
          </Button>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
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

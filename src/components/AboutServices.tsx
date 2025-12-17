import { Brain, Users, Clock, Leaf } from "lucide-react";
import constructionImage from "@/assets/stand-construction-2.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutServices = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      titleKey: 'aboutServices.neuro.title',
      descriptionKey: 'aboutServices.neuro.description',
    },
    {
      icon: Users,
      titleKey: 'aboutServices.engagement.title',
      descriptionKey: 'aboutServices.engagement.description',
    },
    {
      icon: Clock,
      titleKey: 'aboutServices.delivery.title',
      descriptionKey: 'aboutServices.delivery.description',
    },
    {
      icon: Leaf,
      titleKey: 'aboutServices.sustainability.title',
      descriptionKey: 'aboutServices.sustainability.description',
    },
  ];

  return (
    <section className="bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('aboutServices.title')}
            </h2>

            <p className="text-white/80 leading-relaxed text-xs">
              {t('aboutServices.description')}
            </p>

            {/* Features List */}
            <div className="space-y-6 mt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-neon/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-neon" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-neon font-semibold text-lg mb-1">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {t(feature.descriptionKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Construction Image */}
          <div className="relative h-full min-h-[700px]">
            <img
              src={constructionImage}
              alt="Construção de stand"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;

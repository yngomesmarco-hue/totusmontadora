import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutCommitments = () => {
  const [openSection, setOpenSection] = useState<string>("valores");
  const { t } = useLanguage();
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-foreground">
          {t('aboutCommitments.title')}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-sm">
          {t('aboutCommitments.description')}
        </p>

        <div className="space-y-4">
          {/* Missão */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("missao")}
              className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                openSection === "missao"
                  ? "bg-neon text-black"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              <span className="text-xl font-bold flex items-center gap-2">
                {openSection === "missao" ? "−" : "+"} {t('aboutCommitments.mission')}
              </span>
            </button>
            {openSection === "missao" && (
              <div className="bg-background border-t border-border p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-neon">
                        <path
                          fill="currentColor"
                          d="M50,10 L35,35 L10,35 L30,55 L20,80 L50,60 L80,80 L70,55 L90,35 L65,35 Z M50,25 L60,45 L75,45 L62,55 L68,70 L50,57 L32,70 L38,55 L25,45 L40,45 Z"
                        />
                        <rect x="45" y="75" width="10" height="15" fill="currentColor" />
                        <rect x="35" y="85" width="30" height="5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed text-xs">
                      {t('aboutCommitments.mission.text')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Visão */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("visao")}
              className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                openSection === "visao"
                  ? "bg-neon text-black"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              <span className="text-xl font-bold flex items-center gap-2">
                {openSection === "visao" ? "−" : "+"} {t('aboutCommitments.vision')}
              </span>
            </button>
            {openSection === "visao" && (
              <div className="bg-background border-t border-border p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-neon">
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <circle cx="50" cy="50" r="8" fill="currentColor" />
                        <path
                          d="M 20,30 L 30,20 M 80,30 L 70,20 M 20,70 L 30,80 M 80,70 L 70,80"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed text-xs">
                      {t('aboutCommitments.vision.text')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Valores */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("valores")}
              className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                openSection === "valores"
                  ? "bg-neon text-black"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              <span className="text-xl font-bold flex items-center gap-2">
                {openSection === "valores" ? "−" : "+"} {t('aboutCommitments.values')}
              </span>
            </button>
            {openSection === "valores" && (
              <div className="bg-background border-t border-border p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Trophy className="w-20 h-20 text-neon" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        {t('aboutCommitments.values.excellence')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        {t('aboutCommitments.values.innovation')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        {t('aboutCommitments.values.personalization')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs">
                        {t('aboutCommitments.values.professionalism')}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-xs text-left">
                        {t('aboutCommitments.values.passion')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/portfolio")}
            className="bg-neon text-black hover:bg-neon/90 font-bold text-lg px-12 py-4 rounded-md glow-neon transition-all min-w-[260px] max-w-full md:min-w-0"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCommitments;

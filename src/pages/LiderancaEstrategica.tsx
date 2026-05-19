import { useMemo, useState } from "react";
import { Play, Eye, Layers, Clock, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseVideoDialog from "@/components/lideranca/CaseVideoDialog";
import TimelineItem from "@/components/lideranca/TimelineItem";
import { LIDERANCA_TIMELINE_SPEC } from "@/data/liderancaTimeline";
import { useLanguage } from "@/contexts/LanguageContext";
import guilhermePhoto from "@/assets/lideranca/hero/guilherme-camargo.jpeg";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+gostaria+de+falar+sobre+parcerias+estrat%C3%A9gicas+com+a+Totus+Asset&type=phone_number&app_absent=0";

const METRIC_VALUES = ["1991", "35+", "4", "3"] as const;
const PRINCIPLE_NUMS = ["1", "2", "3"] as const;

const LiderancaEstrategica = () => {
  const { t, language } = useLanguage();
  const [openCaseVideoUrl, setOpenCaseVideoUrl] = useState<string | null>(null);

  const timeline = useMemo(
    () =>
      LIDERANCA_TIMELINE_SPEC.map((spec) => ({
        ...spec,
        title: t(`leadership.${spec.id}.title`),
        paragraphs: Array.from({ length: spec.paragraphCount }, (_, i) =>
          t(`leadership.${spec.id}.p${i}`),
        ),
      })),
    [t, language],
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
        <section className="animate-fade-in">
          <div className="grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {t("leadership.hero.eyebrow")}
              </div>

              <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="text-neon">Guilherme Camargo</span>
              </h1>

              <p className="mb-5 text-base font-semibold text-foreground/90 sm:text-lg">{t("leadership.hero.role")}</p>

              <p className="mb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">{t("leadership.hero.intro")}</p>

              <Button
                size="lg"
                className="gap-2 bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
                onClick={() => document.getElementById("trajetoria")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="h-4 w-4" />
                {t("leadership.hero.ctaScroll")}
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-[3/4] max-w-[320px] overflow-hidden rounded-2xl border-2 border-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.25)] sm:max-w-[380px]">
                <img
                  src={guilhermePhoto}
                  alt={t("leadership.hero.imgAlt")}
                  className="h-full w-full object-cover [object-position:center_25%]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 animate-fade-in sm:mt-16">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">{t("leadership.vision.title")}</h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-primary/30 bg-card/50 p-5 sm:p-7">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{t("leadership.vision.p0")}</p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{t("leadership.vision.p1")}</p>
          </div>
        </section>

        <section id="trajetoria" className="mt-12 scroll-mt-24 animate-fade-in sm:mt-16">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">{t("leadership.timeline.title")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("leadership.timeline.subtitle")}
              </p>
            </div>
          </div>

          <div className="relative pl-10 sm:pl-14">
            <div className="absolute bottom-2 left-3 top-2 w-px bg-primary/30 sm:left-5" />

            <div className="space-y-16 sm:space-y-24 lg:space-y-32">
              {timeline.map((item) => (
                <TimelineItem
                  key={`${item.year}-${item.id}`}
                  item={item}
                  onOpenVideo={setOpenCaseVideoUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 animate-fade-in sm:mt-16">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">{t("leadership.principles.title")}</h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-primary/30 bg-card/50 p-5 sm:p-7">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("leadership.principles.intro.before")}
              <span className="font-semibold text-primary">{t("leadership.principles.intro.highlight")}</span>
              {t("leadership.principles.intro.after")}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("leadership.principles.intro2.before")}
              <span className="font-semibold text-primary">{t("leadership.principles.intro2.highlight")}</span>
              {t("leadership.principles.intro2.after")}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {PRINCIPLE_NUMS.map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-primary/30 bg-card/50 p-5 transition-colors hover:border-primary"
              >
                <p className="mb-2 text-2xl font-bold text-neon">{`0${n}`}</p>
                <h3 className="mb-2 text-base font-bold">{t(`leadership.principle${n}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`leadership.principle${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 animate-fade-in sm:mt-16">
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">{t("leadership.platform.title")}</h2>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <h3 className="mb-3 text-lg font-bold sm:text-xl">
                {t("leadership.platform.subtitle.before")}
                <span className="text-primary">{t("leadership.platform.subtitle.highlight")}</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{t("leadership.platform.body")}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {METRIC_VALUES.map((value, i) => (
                <div
                  key={`${value}-${i}`}
                  className="rounded-xl border border-primary/30 bg-card/50 p-4 text-center"
                >
                  <p className="mb-1 text-2xl font-bold text-neon sm:text-3xl">{value}</p>
                  <p className="text-[10px] uppercase leading-tight tracking-wider text-muted-foreground sm:text-xs">
                    {t(`leadership.stats.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12 rounded-2xl border-2 border-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 text-center animate-fade-in sm:mt-16 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{t("leadership.cta.eyebrow")}</p>
          <h3 className="mb-3 text-xl font-bold sm:text-2xl">{t("leadership.cta.title")}</h3>
          <p className="mx-auto mb-6 max-w-xl text-sm text-muted-foreground">{t("leadership.cta.body")}</p>
          <Button
            size="lg"
            className="gap-2 bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
            onClick={() => window.open(WHATSAPP, "_blank")}
          >
            {t("leadership.cta.button")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>

      <CaseVideoDialog videoUrl={openCaseVideoUrl} onClose={() => setOpenCaseVideoUrl(null)} />

      <Footer />
    </div>
  );
};

export default LiderancaEstrategica;

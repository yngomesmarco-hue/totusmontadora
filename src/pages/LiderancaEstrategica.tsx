import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Eye, Layers, Clock, Building2, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import guilhermePhoto from "@/assets/guilherme-camargo.jpeg";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+gostaria+de+falar+sobre+parcerias+estrat%C3%A9gicas+com+a+Totus+Asset&type=phone_number&app_absent=0";

function vimeoIframeSrc(embedUrl: string, lang: Language) {
  const u = new URL(embedUrl);
  if (!u.searchParams.has("autoplay")) {
    u.searchParams.set("autoplay", "1");
  }
  u.searchParams.set("lang", lang === "pt" ? "pt" : "en");
  return u.toString();
}

type TimelineSpec = {
  year: string;
  id: string;
  paragraphCount: number;
  videoUrl?: string;
  siteUrl?: string;
};

/** Dados fixos da linha do tempo; textos via i18n (leadership.y*). */
const TIMELINE_SPEC: TimelineSpec[] = [
  { year: "2026", id: "y2026", paragraphCount: 2 },
  {
    year: "2025",
    id: "y2025",
    paragraphCount: 2,
    siteUrl: "https://www.locamotofacil.com.br",
  },
  {
    year: "2024",
    id: "y2024",
    paragraphCount: 2,
    siteUrl: "https://www.locacarrofacil.com.br",
  },
  {
    year: "2023",
    id: "y2023",
    paragraphCount: 2,
    siteUrl: "/",
    videoUrl: "https://player.vimeo.com/video/1190656947?h=1e610e8173",
  },
  {
    year: "2020",
    id: "y2020",
    paragraphCount: 3,
    videoUrl: "https://player.vimeo.com/video/508645636?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    year: "2012",
    id: "y2012",
    paragraphCount: 2,
    videoUrl: "https://player.vimeo.com/video/1190655769?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    year: "2005",
    id: "y2005",
    paragraphCount: 2,
    videoUrl: "https://player.vimeo.com/video/631008048?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    year: "2003",
    id: "y2003",
    paragraphCount: 2,
    videoUrl: "https://player.vimeo.com/video/570418042?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  { year: "1998", id: "y1998", paragraphCount: 2 },
  { year: "1994", id: "y1994", paragraphCount: 2 },
  { year: "1991", id: "y1991", paragraphCount: 2 },
];

const METRIC_VALUES = ["1991", "35+", "4", "3"] as const;

const PRINCIPLE_NUMS = ["1", "2", "3"] as const;

const LiderancaEstrategica = () => {
  const { t, language } = useLanguage();
  const [openCaseVideoUrl, setOpenCaseVideoUrl] = useState<string | null>(null);

  const timeline = useMemo(
    () =>
      TIMELINE_SPEC.map((spec) => ({
        ...spec,
        title: t(`leadership.${spec.id}.title`),
        paragraphs: Array.from({ length: spec.paragraphCount }, (_, i) => t(`leadership.${spec.id}.p${i}`)),
      })),
    [t, language],
  );

  const handleContact = () => {
    window.open(WHATSAPP, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
        <section>
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

        <section className="mt-12 sm:mt-16">
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

        <section id="trajetoria" className="mt-12 scroll-mt-24 sm:mt-16">
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">{t("leadership.timeline.title")}</h2>
          </div>

          <div className="relative pl-10 sm:pl-14">
            <div className="absolute bottom-2 left-3 top-2 w-px bg-primary/30 sm:left-5" />

            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={`${item.year}-${item.id}`} className="relative">
                  <div className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] ring-4 ring-background sm:-left-[42px]" />

                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">{item.year}</p>
                  <h3 className="mb-3 text-base font-bold sm:text-lg">{item.title}</h3>
                  <div className="space-y-3 rounded-xl border border-primary/20 bg-card/40 p-4 sm:p-5">
                    {item.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                    <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      {item.videoUrl ? (
                        <button
                          type="button"
                          onClick={() => setOpenCaseVideoUrl(item.videoUrl!)}
                          className="inline-flex items-center gap-2 text-left text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                        >
                          <Play className="h-3.5 w-3.5 shrink-0 fill-primary" />
                          {t("leadership.caseCta")}
                        </button>
                      ) : null}
                      {item.siteUrl ? (
                        item.siteUrl.startsWith("/") ? (
                          <Link
                            to={item.siteUrl}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                          >
                            <Globe className="h-3.5 w-3.5" />
                            {t("leadership.visitSite")}
                          </Link>
                        ) : (
                          <a
                            href={item.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                          >
                            <Globe className="h-3.5 w-3.5" />
                            {t("leadership.visitSite")}
                          </a>
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
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

        <section className="mt-12 sm:mt-16">
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

        <div className="mt-12 rounded-2xl border-2 border-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 text-center sm:mt-16 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{t("leadership.cta.eyebrow")}</p>
          <h3 className="mb-3 text-xl font-bold sm:text-2xl">{t("leadership.cta.title")}</h3>
          <p className="mx-auto mb-6 max-w-xl text-sm text-muted-foreground">{t("leadership.cta.body")}</p>
          <Button
            size="lg"
            className="gap-2 bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
            onClick={handleContact}
          >
            {t("leadership.cta.button")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>

      <Dialog open={openCaseVideoUrl !== null} onOpenChange={(open) => !open && setOpenCaseVideoUrl(null)}>
        <DialogContent className="w-[min(92vw,420px,min(calc(85vh*9/16),100vw))] max-w-[min(92vw,420px,min(calc(85vh*9/16),100vw))] p-0 bg-black border-0 shadow-none [&>button]:text-white [&>button]:hover:opacity-100">
          {openCaseVideoUrl ? (
            <div className="overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
              <div className="aspect-[9/16] w-full bg-black">
                <iframe
                  key={openCaseVideoUrl}
                  title={t("leadership.caseVideoTitle")}
                  src={vimeoIframeSrc(openCaseVideoUrl, language)}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default LiderancaEstrategica;

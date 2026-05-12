import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/contexts/LanguageContext";

const bisSigma2026Images = Object.entries(
  import.meta.glob<string>("../assets/bis-sigma-2026/*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const BisSigma2026 = () => {
  const { t } = useLanguage();
  const title = t("portfolio.bisSigma2026");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
            {title}
          </h1>
          <ImageGallery images={bisSigma2026Images} altPrefix={title} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BisSigma2026;

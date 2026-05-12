import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Denso = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-8">
            {t('portfolio.denso')}
          </h1>
          <p className="text-center text-muted-foreground text-xl">
            {t('portfolio.comingSoon')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Denso;

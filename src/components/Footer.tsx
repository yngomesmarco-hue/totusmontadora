import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [downloadForm, setDownloadForm] = useState({
    name: "",
    company: "",
    email: "",
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('footer.downloadStarted'),
      description: t('footer.thanks'),
    });
    setDownloadForm({
      name: "",
      company: "",
      email: "",
    });
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <footer className="bg-black border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div>
              <div className="text-3xl font-bold text-neon mb-4">TOTUS</div>
              <p className="text-muted-foreground">{t('footer.description')}</p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage("/sobre-nos")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    {t('nav.about')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage("/portfolio")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    {t('nav.portfolio')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+vim+pelo+site+da+Totus+e+tenho+interesse&type=phone_number&app_absent=0",
                        "_blank"
                      )
                    }
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>atendimento@totusmontadora.com.br</li>
                <li>{t('footer.contactBelow')}</li>
                <li>WhatsApp: (11) 94004-2546</li>
              </ul>
            </div>

            {/* Download Form */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t('footer.downloadPortfolio')}</h3>
              <form onSubmit={handleDownload} className="space-y-3">
                <Input
                  placeholder={t('footer.name')}
                  value={downloadForm.name}
                  onChange={(e) =>
                    setDownloadForm({ ...downloadForm, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
                <Input
                  placeholder={t('footer.company')}
                  value={downloadForm.company}
                  onChange={(e) =>
                    setDownloadForm({ ...downloadForm, company: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
                <Input
                  type="email"
                  placeholder={t('footer.email')}
                  value={downloadForm.email}
                  onChange={(e) =>
                    setDownloadForm({ ...downloadForm, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
                <Button
                  type="submit"
                  className="w-full bg-neon text-black hover:bg-neon/90 font-semibold"
                >
                  {t('footer.download')}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              {t('footer.rights')} 37.154.824/0001-26 –{" "}
              <a href="#" className="hover:text-neon transition-colors">
                {t('footer.privacyPolicy')}
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+vim+pelo+site+da+Totus+e+tenho+interesse&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </>
  );
};

export default Footer;

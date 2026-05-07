import { useNavigate, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import iconInstagram from "@/assets/icon-instagram.png";
import iconFacebook from "@/assets/icon-facebook.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

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
              <p className="text-muted-foreground mb-4">{t('footer.description')}</p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/totuscenografia?igsh=MWV2cThrZmtvdmQxZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <img src={iconInstagram} alt="Instagram" className="w-10 h-10 object-contain" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585363286635&rdid=VSJmchqKCSgfMLWa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DYeHqyqNT%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <img src={iconFacebook} alt="Facebook" className="w-10 h-10 object-contain" />
                </a>
              </div>
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
                <li>{t('footer.phone')}</li>
              </ul>
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

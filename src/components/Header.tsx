import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoTotus from "@/assets/logo-totus.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconFacebook from "@/assets/icon-facebook.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isAboutPage = location.pathname === "/sobre-nos";
  const quoteLabel = isAboutPage ? t('hero.cta') : t('nav.quote');
  const handleQuoteClick = () => {
    if (isAboutPage) {
      navigateToPage("/portfolio");
      return;
    }

    window.open("https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+vim+pelo+site+da+Totus+e+tenho+interesse&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoTotus} alt="TOTUS Cenografia" className="h-7 md:h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/")}
              className={`transition-colors font-medium ${
                location.pathname === "/" ? "text-neon" : "text-foreground hover:text-neon"
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => navigateToPage("/sobre-nos")}
              className={`transition-colors ${
                location.pathname === "/sobre-nos" ? "text-neon" : "text-foreground hover:text-neon"
              }`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => navigateToPage("/lideranca-estrategica")}
              className={`transition-colors font-medium ${
                location.pathname === "/lideranca-estrategica" ? "text-neon" : "text-foreground hover:text-neon"
              }`}
            >
              {t('nav.leadership')}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger 
                onClick={() => navigateToPage("/portfolio")}
                className={`transition-colors flex items-center gap-1 font-medium ${
                  location.pathname.startsWith("/portfolio") ? "text-neon" : "text-foreground hover:text-neon"
                }`}>
                {t('nav.portfolio')} <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border z-50">
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/denso")} className="text-foreground hover:text-neon cursor-pointer">
                  {t('portfolio.denso')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/bis-sigma-2026")} className="text-foreground hover:text-neon cursor-pointer">
                  {t('portfolio.bisSigma2026')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/sigma-americas-2024")} className="text-foreground hover:text-neon cursor-pointer">
                  {t('portfolio.sigma2024')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/sigma-americas-2025")} className="text-foreground hover:text-neon cursor-pointer">
                  {t('portfolio.sigma2025')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/sbc-summit-rio-2026")} className="text-foreground hover:text-neon cursor-pointer">
                  {t('portfolio.sbc2026')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+vim+pelo+site+da+Totus+e+tenho+interesse&type=phone_number&app_absent=0", "_blank")}
              className="text-foreground hover:text-neon transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={handleQuoteClick}
              className="bg-neon text-black hover:bg-neon/90 font-semibold glow-neon rounded-lg px-6"
            >
              {quoteLabel}
            </Button>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button and Language Selector */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button
              onClick={() => navigate("/")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => navigateToPage("/sobre-nos")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => navigateToPage("/lideranca-estrategica")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              {t('nav.leadership')}
            </button>
            <button
              onClick={() => navigateToPage("/portfolio")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              {t('nav.portfolio')}
            </button>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+vim+pelo+site+da+Totus+e+tenho+interesse&type=phone_number&app_absent=0", "_blank")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              {t('nav.contact')}
            </button>
            <Button
              onClick={handleQuoteClick}
              className="w-full h-auto min-h-11 bg-neon text-black hover:bg-neon/90 font-semibold text-sm leading-tight whitespace-normal px-4 py-3 text-center"
            >
              {quoteLabel}
            </Button>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/totuscenografia?igsh=MWV2cThrZmtvdmQxZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src={iconInstagram} alt="Instagram" className="w-8 h-8 object-contain" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585363286635&rdid=VSJmchqKCSgfMLWa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DYeHqyqNT%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img src={iconFacebook} alt="Facebook" className="w-8 h-8 object-contain" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

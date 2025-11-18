import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoTotus from "@/assets/logo-totus.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoTotus} alt="TOTUS Cenografia" className="h-8 md:h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/")}
              className={`transition-colors font-medium ${
                location.pathname === "/" ? "text-neon" : "text-foreground hover:text-neon"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateToPage("/sobre-nos")}
              className={`transition-colors ${
                location.pathname === "/sobre-nos" ? "text-neon" : "text-foreground hover:text-neon"
              }`}
            >
              Sobre Nós
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger 
                onClick={() => navigateToPage("/portfolio")}
                className={`transition-colors flex items-center gap-1 font-medium ${
                  location.pathname.startsWith("/portfolio") ? "text-neon" : "text-foreground hover:text-neon"
                }`}>
                Portfólio <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border z-50">
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/sigma-americas-2024")} className="text-foreground hover:text-neon cursor-pointer">
                  Sigma Américas 2024
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/sigma-americas-2025")} className="text-foreground hover:text-neon cursor-pointer">
                  Sigma Américas 2025
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigateToPage("/portfolio/automec")} className="text-foreground hover:text-neon cursor-pointer">
                  Automec
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5511962428997&text=Vi%20seu%20site%20e%20tenho%20interesse", "_blank")}
              className="text-foreground hover:text-neon transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5511962428997&text=Vi%20seu%20site%20e%20tenho%20interesse", "_blank")}
              className="bg-neon text-black hover:bg-neon/90 font-semibold glow-neon rounded-lg px-6"
            >
              Solicite um orçamento
            </Button>
            <div className="flex items-center gap-2 border border-border rounded px-3 py-2">
              <span className="text-2xl">🇧🇷</span>
              <span className="text-foreground font-medium">PT</span>
              <ChevronDown size={16} className="text-foreground" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button
              onClick={() => navigate("/")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => navigateToPage("/sobre-nos")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => navigateToPage("/portfolio")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Portfólio
            </button>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5511962428997&text=Vi%20seu%20site%20e%20tenho%20interesse", "_blank")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Contato
            </button>
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5511962428997&text=Vi%20seu%20site%20e%20tenho%20interesse", "_blank")}
              className="bg-neon text-black hover:bg-neon/90 font-semibold"
            >
              Solicite um orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-neon">BTOS</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-neon transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-neon transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-neon transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-neon transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-neon text-black hover:bg-neon/90 font-semibold glow-neon"
            >
              Solicite um orçamento
            </Button>
          </nav>

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
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-neon transition-colors text-left"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
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

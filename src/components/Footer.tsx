import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [downloadForm, setDownloadForm] = useState({
    name: "",
    company: "",
    email: "",
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Download iniciado!",
      description: "Obrigado pelo seu interesse.",
    });
    setDownloadForm({ name: "", company: "", email: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-black border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div>
              <div className="text-3xl font-bold text-neon mb-4">TOTUS</div>
              <p className="text-muted-foreground">
                Montadora especializada em stands para eventos, criando experiências
                únicas e memoráveis.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    Portfólio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@totusmontadora.com.br</li>
                <li>(11) 98765-4321</li>
                <li>WhatsApp: (11) 98765-4321</li>
              </ul>
            </div>

            {/* Download Form */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Baixe nosso Portfólio</h3>
              <form onSubmit={handleDownload} className="space-y-3">
                <Input
                  placeholder="Nome"
                  value={downloadForm.name}
                  onChange={(e) =>
                    setDownloadForm({ ...downloadForm, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
                <Input
                  placeholder="Sua Empresa"
                  value={downloadForm.company}
                  onChange={(e) =>
                    setDownloadForm({ ...downloadForm, company: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
                <Input
                  type="email"
                  placeholder="Email"
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
                  Baixar
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © TOTUS Montadora – Todos os direitos reservados – CNPJ:
              50.547.235/0001-76 –{" "}
              <a href="#" className="hover:text-neon transition-colors">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511987654321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-neon text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform glow-neon"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
};

export default Footer;

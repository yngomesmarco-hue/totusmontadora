import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Vamos transformar suas ideias em <span className="text-neon">realidade</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Preencha o formulário e nossa equipe entrará em contato para
                desenvolver o projeto perfeito para o seu evento.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  Atendimento personalizado
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  Orçamento sem compromisso
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  Resposta em até 24 horas
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-secondary border-border focus:border-neon"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-secondary border-border focus:border-neon"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    required
                    className="bg-secondary border-border focus:border-neon"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-neon text-black hover:bg-neon/90 font-semibold text-lg py-6 glow-neon"
                >
                  ENVIAR
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

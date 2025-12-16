import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Erro ao enviar");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Recebemos seu contato e retornaremos em breve.",
      });

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        mensagem: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
      });
    }
  };

  return (
    <section id="contato" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Vamos transformar suas ideias em{" "}
                <span className="text-neon">realidade</span>
              </h2>

              <p className="md:text-xl text-muted-foreground mb-4 md:mb-6 text-base">
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
              className="bg-card p-6 md:p-8 rounded-lg border border-border"
            >
              <div className="space-y-6">
                <Input
                  type="text"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500"
                />

                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500"
                />

                <Input
                  type="tel"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                  required
                  className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500"
                />

                <Textarea
                  placeholder="Mensagem"
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  rows={4}
                  className="bg-white border-border focus:border-neon resize-none text-black placeholder:text-gray-500"
                />

                <Button
                  type="submit"
                  className="w-full bg-neon text-black hover:bg-neon/90 font-bold text-base md:text-lg py-5 md:py-6 glow-neon uppercase"
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

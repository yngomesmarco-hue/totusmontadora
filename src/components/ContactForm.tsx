import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    mensagem: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:atendimento@totusmontadora.com.br?subject=Contato via Site - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMensagem:\n${formData.mensagem}`
    )}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Seu email será aberto para enviar a mensagem."
    });
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      mensagem: ""
    });
  };
  return <section id="contato" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Vamos transformar suas ideias em <span className="text-neon">realidade</span>
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

            <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-lg border border-border">
              <div className="space-y-6">
              <div>
                  <Input id="name" type="text" placeholder="Nome" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500" />
                </div>

                <div>
                  <Input id="email" type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500" />
                </div>

                <div>
                  <Input id="whatsapp" type="tel" placeholder="WhatsApp" value={formData.whatsapp} onChange={e => setFormData({
                  ...formData,
                  whatsapp: e.target.value
                })} required className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500" />
                </div>

                <div>
                  <Textarea id="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={e => setFormData({
                  ...formData,
                  mensagem: e.target.value
                })} rows={4} className="bg-white border-border focus:border-neon resize-none text-black placeholder:text-gray-500" />
                </div>

                <Button type="submit" className="w-full bg-neon text-black hover:bg-neon/90 font-bold text-base md:text-lg py-5 md:py-6 glow-neon uppercase">
                  ENVIAR
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;
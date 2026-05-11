import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

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
        title: t('contact.success.title'),
        description: t('contact.success.description'),
      });

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        mensagem: "",
      });
    } catch (error) {
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.description'),
      });
    }
  };

  return (
    <section id="contato" className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                {t('contact.title')}{" "}
                <span className="text-neon">{t('contact.titleHighlight')}</span>
              </h2>

              <p className="md:text-xl text-muted-foreground mb-4 md:mb-6 text-base">
                {t('contact.description')}
              </p>

              <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  {t('contact.benefit1')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  {t('contact.benefit2')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  {t('contact.benefit3')}
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card p-5 md:p-8 rounded-lg border border-border"
            >
              <div className="space-y-4 md:space-y-6">
                <Input
                  type="text"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500"
                />

                <Input
                  type="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500"
                />

                <Input
                  type="tel"
                  placeholder={t('contact.whatsapp')}
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                  required
                  className="bg-white border-border focus:border-neon text-black placeholder:text-gray-500"
                />

                <Textarea
                  placeholder={t('contact.message')}
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  rows={4}
                  className="bg-white border-border focus:border-neon resize-none text-black placeholder:text-gray-500"
                />

                <Button
                  type="submit"
                  className="w-full bg-neon text-black hover:bg-neon/90 font-bold text-sm md:text-lg py-4 md:py-6 glow-neon uppercase"
                >
                  {t('contact.submit')}
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

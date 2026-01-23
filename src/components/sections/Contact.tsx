import { useState } from "react";
import { Send, Mail, User, FileText } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve.",
    });

    setFormData({ name: "", email: "", project: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <MotionWrapper>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Contato
              </span>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                Converse <span className="text-gradient">Comigo</span>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Pronto para transformar sua visão em realidade? Conte-me sobre
                seu projeto.
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-secondary/30 border border-border space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nome
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 bg-background/50 border-border focus:border-primary rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 bg-background/50 border-border focus:border-primary rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="project"
                  className="text-foreground font-medium"
                >
                  Descrição do Projeto
                </Label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    id="project"
                    name="project"
                    placeholder="Conte-me sobre seu projeto, objetivos e expectativas..."
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="pl-12 pt-4 bg-background/50 border-border focus:border-primary rounded-xl resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-base font-medium bg-gradient-accent text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-glow"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

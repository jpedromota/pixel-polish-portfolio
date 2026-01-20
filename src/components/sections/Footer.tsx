import { useState } from "react";
import { Send, Linkedin, Github, Instagram, Mail, MapPin } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contato" className="relative bg-card border-t border-border">
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <MotionWrapper>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Contato
              </span>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                Vamos criar algo{" "}
                <span className="text-gradient">incrível juntos?</span>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Tem um projeto em mente? Adoraria ouvir sobre ele. Vamos conversar
                sobre como posso ajudar a transformar sua visão em realidade.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contato@devstudio.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <div className="flex items-center gap-4 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </MotionWrapper>
          </div>

          {/* Right - Form */}
          <MotionWrapper delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-medium bg-gradient-accent text-primary-foreground rounded-full hover:opacity-90 transition-all shadow-glow"
              >
                Enviar Mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </MotionWrapper>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-gradient font-semibold">devstudio</span>. Todos
              os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
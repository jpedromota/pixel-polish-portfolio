import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-display font-bold text-gradient mb-6 block">
              João Pedro
            </a>
            <p className="text-muted-foreground max-w-sm mb-8">
              Design Estratégico para marcas que buscam conexão, autoridade e refinamento técnico.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/SEU_USER_AQUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary transition-colors text-muted-foreground hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/joão-pedro-mota-56082a345/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary transition-colors text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/jpedromota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary transition-colors text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:jpedromota.7@gmail.com" className="hover:text-primary transition-colors">
                  jpedromota.7@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Juiz de Fora - MG, Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} João Pedro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

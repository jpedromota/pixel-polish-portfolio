import { Monitor, Rocket, Film, Code } from "lucide-react";
import { MotionWrapper, MotionStagger, MotionItem } from "@/components/ui/motion-wrapper";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Interfaces modernas e funcionais que capturam a essência da sua marca e proporcionam experiências memoráveis aos usuários.",
    features: ["UI/UX Design", "Prototipagem", "Design Systems"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão otimizadas para transformar visitantes em leads qualificados e clientes fiéis.",
    features: ["Copywriting", "A/B Testing", "Otimização de Conversão"],
  },
  {
    icon: Film,
    title: "Motion Graphics",
    description:
      "Animações e micro-interações que trazem vida às interfaces, criando experiências mais envolventes e dinâmicas.",
    features: ["Animações CSS/JS", "Transições", "Efeitos Visuais"],
  },
  {
    icon: Code,
    title: "Desenvolvimento Frontend",
    description:
      "Código limpo, performático e escalável utilizando as tecnologias mais modernas do mercado.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Serviços
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Soluções completas para sua{" "}
              <span className="text-gradient">presença digital</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Do conceito ao código final, ofereço um pacote completo de serviços
              para elevar sua presença online ao próximo nível.
            </p>
          </MotionWrapper>
        </div>

        <MotionStagger className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <MotionItem key={service.title}>
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden hover-lift">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-glow">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};
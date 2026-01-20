import { Code2, Palette, Target, Zap } from "lucide-react";
import { MotionWrapper, MotionStagger, MotionItem } from "@/components/ui/motion-wrapper";

const highlights = [
  {
    icon: Palette,
    title: "Design Intencional",
    description: "Cada elemento tem um propósito estratégico",
  },
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Performance e manutenibilidade garantidas",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Métricas e conversões como prioridade",
  },
  {
    icon: Zap,
    title: "Experiência Fluida",
    description: "UX otimizada para engajamento",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <MotionWrapper>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Sobre Mim
              </span>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
                Criando experiências digitais{" "}
                <span className="text-gradient">memoráveis</span>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sou um Web Designer e Desenvolvedor Frontend apaixonado por criar
                interfaces que não apenas impressionam visualmente, mas que
                também geram resultados tangíveis para negócios.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Minha abordagem combina design estratégico com desenvolvimento
                técnico de alta qualidade. Cada projeto é tratado como uma
                oportunidade de criar algo único que conecta marcas aos seus
                públicos de forma autêntica e eficaz.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Vamos conversar sobre seu projeto
                <span className="text-lg">→</span>
              </a>
            </MotionWrapper>
          </div>

          {/* Right Content - Highlights Grid */}
          <MotionStagger className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <MotionItem key={item.title}>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
};
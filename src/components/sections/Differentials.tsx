import { MessageSquare, Lightbulb, CheckCircle2 } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const differentials = [
  {
    icon: MessageSquare,
    title: "Copywriting Estratégico",
    description:
      "Textos persuasivos que conectam emocionalmente com seu público e guiam para a ação.",
    points: [
      "Headlines que capturam atenção",
      "CTAs otimizados para conversão",
      "Storytelling envolvente",
    ],
  },
  {
    icon: Lightbulb,
    title: "Design Intencional",
    description:
      "Cada pixel tem um propósito. Estética funcional focada em resultados mensuráveis.",
    points: [
      "Hierarquia visual clara",
      "UX orientada por dados",
      "Micro-interações significativas",
    ],
  },
];

export const Differentials = () => {
  return (
    <section className="py-24 md:py-32 relative bg-secondary/20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Diferenciais
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Por que escolher{" "}
              <span className="text-gradient">trabalhar comigo?</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Combino estratégia, criatividade e técnica para entregar
              resultados que superam expectativas.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {differentials.map((diff, index) => (
            <MotionWrapper key={diff.title} delay={0.1 * (index + 1)}>
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card border border-border">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-accent mb-6 shadow-glow">
                    <diff.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {diff.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {diff.description}
                  </p>

                  <ul className="space-y-3">
                    {diff.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
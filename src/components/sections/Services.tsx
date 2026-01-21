import { Monitor, Rocket, Code } from "lucide-react";
import { MotionWrapper, MotionStagger, MotionItem } from "@/components/ui/motion-wrapper";

const services = [
  {
    icon: Monitor,
    title: "Web Design & Landing Pages",
    description:
      "Interfaces estratégicas e páginas de alta conversão que capturam a essência da sua marca e transformam visitantes em clientes.",
    features: ["UI/UX Design", "Alta Conversão", "Design Systems"],
  },
  {
    icon: Rocket,
    title: "Social Media & Artes Estáticas",
    description:
      "Identidade visual consistente para suas redes sociais, com artes que comunicam e engajam seu público de forma autêntica.",
    features: ["Feed Design", "Stories", "Carrosséis"],
  },
  {
    icon: Code,
    title: "Performance & Vibe Coding",
    description:
      "Código limpo e organizado como diferencial de bastidor, garantindo que seu design funcione com velocidade e precisão técnica.",
    features: ["Performance", "Responsividade", "Otimização"],
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
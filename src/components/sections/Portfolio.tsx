import { ExternalLink, Github } from "lucide-react";
import { MotionWrapper, MotionStagger, MotionItem } from "@/components/ui/motion-wrapper";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web App • UI/UX",
    description: "Dashboard moderno para gestão financeira com visualizações de dados interativas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "E-commerce Premium",
    category: "Landing Page • Conversão",
    description: "Loja virtual de alta conversão para marca de produtos premium.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "SaaS Marketing",
    category: "Landing Page • Motion",
    description: "Página de vendas animada com storytelling visual impactante.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    tags: ["Framer Motion", "GSAP", "React"],
  },
  {
    title: "Portfolio Criativo",
    category: "Web Design • Branding",
    description: "Portfolio digital para fotógrafo com galeria imersiva.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    tags: ["Three.js", "WebGL", "CSS"],
  },
];

export const Portfolio = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Portfólio
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Projetos que{" "}
              <span className="text-gradient">geram resultados</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Uma seleção de trabalhos que demonstram minha abordagem estratégica
              e atenção aos detalhes.
            </p>
          </MotionWrapper>
        </div>

        <MotionStagger className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <MotionItem key={project.title}>
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-glow">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

        <MotionWrapper delay={0.4} className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium border border-border rounded-full hover:bg-secondary/50 transition-colors"
          >
            Ver todos os projetos
            <span>→</span>
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
};
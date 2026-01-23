import { motion } from "framer-motion";

const projects = [
  {
    id: "social-media",
    title: "Social Media Posts",
    description: "Design focado em conversão, autoridade e engajamento para marcas que buscam se destacar no digital.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "motion-design",
    title: "Motion Design",
    description: "Animações dinâmicas e vídeos curtos que capturam a atenção e dão vida à identidade da marca.",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Páginas de alta conversão para marcas de produtos premium, focadas em transformar visitantes em clientes.",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "dashboards",
    title: "Dashboards Mensais",
    description: "Envio de relatórios e dashboards mensais para analisar o desempenho das métricas e ajustar a estratégia.",
    category: "Estratégia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

export const Portfolio = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Portfólio</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uma seleção de projetos que unem estratégia, design e performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border"
            >
              <div className="aspect-video overflow-hidden">
                {/* Imagem placeholder - substitua por suas artes reais */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-medium uppercase tracking-wider text-primary mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

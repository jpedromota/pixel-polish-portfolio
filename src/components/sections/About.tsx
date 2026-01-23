import { motion } from "framer-motion";
import { Shield, Zap, Target, Layout } from "lucide-react";

const differentials = [
  {
    title: "Design Estratégico",
    description: "Criação visual com propósito, focada em comunicar a autoridade da sua marca.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Garantida",
    description: "Sites rápidos e otimizados para proporcionar a melhor experiência ao usuário.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "Foco em Resultados",
    description: "Projetos desenvolvidos para converter visitantes em clientes reais.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Experiência Fluida",
    description: "Navegação intuitiva que guia o usuário de forma natural pelo conteúdo.",
    icon: <Layout className="w-6 h-6 text-primary" />,
  }
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Sobre o Trabalho</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meu trabalho une a sensibilidade e a estratégia do design à experiência do usuário. 
            Foco em criar interfaces que não apenas pareçam boas, mas que funcionem como ferramentas 
            de conversão para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col h-full"
            >
              <div className="mb-4">{diff.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{diff.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

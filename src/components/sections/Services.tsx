import { motion } from "framer-motion";
import { 
  Layout, 
  Smartphone, 
  Search, 
  Code, 
  BarChart, 
  PlayCircle 
} from "lucide-react";

const services = [
  {
    title: "Web Design Estratégico",
    description: "Criação de interfaces modernas e intuitivas focadas em conversão e experiência do usuário.",
    icon: <Layout className="w-6 h-6 text-primary" />,
  },
  {
    title: "Social Media Design",
    description: "Artes estáticas e carrosséis estratégicos para construir autoridade e engajamento no Instagram.",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Motion Design",
    description: "Animações impactantes que prendem a atenção e comunicam sua mensagem com dinamismo.",
    icon: <PlayCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: "SEO e Performance",
    description: "Otimização técnica para que seu site seja encontrado e carregue instantaneamente.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Desenvolvimento Clean Code",
    description: "Sites construídos com as tecnologias mais modernas e código limpo para fácil manutenção.",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    title: "Análise de Métricas",
    description: "Acompanhamento de resultados e dashboards mensais para otimizar sua estratégia digital.",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Soluções Digitais</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofereço serviços integrados para marcas que buscam excelência visual e resultados estratégicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Spring MVC", "EJB", "Node.js", "Python"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "jQuery", "JSF", "PrimeFaces", "Bootstrap", "React"],
  },
  {
    title: "Mobile",
    items: ["Android Studio", "Java Mobile"],
  },
  {
    title: "Herramientas",
    items: ["Git", "Docker", "PostgreSQL", "MySQL", "Oracle", "Linux"],
  },
];

const TechSection = () => (
  <section id="tech" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">
          <span className="text-primary">{"#"}</span> Stack Tecnológico
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-10" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {techCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
          >
            <h3 className="font-mono text-sm text-primary mb-4">
              {">"} {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-mono bg-muted text-foreground rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechSection;

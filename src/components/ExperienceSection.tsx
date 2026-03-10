import { motion } from "framer-motion";

const companies = [
  { name: "Encora", logo: "/experience/encora.png", url: "https://www.encora.com/es" },
  { name: "NTT Data", logo: "/experience/nttdata.png", url: "https://pe.nttdata.com" },
  { name: "Indra", logo: "/experience/indra.png", url: "https://www.indragroup.com/es" },
  { name: "Cosapi", logo: "/experience/cosapi.png", url: "https://www.cosapi.com.pe" },
  { name: "Zicsa", logo: "/experience/zicsa.png", url: "https://zicsa.com/" },
  { name: "MIDIS", logo: "/experience/midis.png", url: "https://www.gob.pe/midis" },
  { name: "MIMP", logo: "/experience/mimp.png", url: "https://www.gob.pe/mimp" },
  { name: "SUNAFIL", logo: "/experience/sunafil.png", url: "https://www.gob.pe/sunafil" },
  { name: "SUSALUD", logo: "/experience/susalud.png", url: "https://www.gob.pe/susalud" },
  { name: "MINTRA", logo: "/experience/mintra.png", url: "https://www.gob.pe/mtpe" },
  { name: "INS", logo: "/experience/ins.png", url: "https://www.gob.pe/ins" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">
          <span className="text-primary">{"#"}</span> Experiencia
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-4" />
        <p className="text-muted-foreground mb-10">
          Empresas donde he contribuido con soluciones tecnológicas
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {companies.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="bg-foreground/90 border border-border rounded-lg p-3 flex items-center justify-center hover:border-primary/50 hover:scale-105 transition-all aspect-square"            title={c.name}
          >
            <img src={c.logo} alt={c.name} className="w-full h-full object-contain transition-all" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

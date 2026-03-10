import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">
          <span className="text-primary">{"#"}</span> Sobre mí
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8" />
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border glow-border">
          <p className="text-foreground leading-relaxed mb-4">
            Profesional en sistemas e informática residente en Lima, Perú, con
            <span className="text-primary font-semibold"> más de 10 años de experiencia</span> laboral
            en análisis, diseño y programación de software para empresas públicas y privadas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Me declaro apasionado por el código fuente y las buenas prácticas de programación.
            Siempre deseoso de aprender cosas nuevas y fomentar formas de trabajo ágil.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Actualmente me dedico a desarrollar proyectos (Web y Móvil) personalizados de manera
            freelance, con tecnologías Open Source. Si tu empresa o emprendimiento necesita dar
            el gran salto tecnológico, no dudes en{" "}
            <a href="#contact" className="text-primary hover:underline">contactarme</a>.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

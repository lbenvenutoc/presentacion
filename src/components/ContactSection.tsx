import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 px-4">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">
          <span className="text-primary">{"#"}</span> Contacto
        </h2>
        <div className="w-20 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground mb-10">
          ¿Tienes un proyecto en mente? No dudes en contactarme.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://github.com/lbenvenutoc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lbenvenutoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:lbenvenutoc@gmail.com"
            className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            title="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="/cv/CV_BENVENUTO_VERSION_PORTAFOLIO.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_hsl(142,70%,50%,0.3)] transition-all"
        >
          <FileDown size={16} /> Descargar CV
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

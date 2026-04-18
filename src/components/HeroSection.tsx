import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import foto from "@/assets/foto.jpg";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const titles = t("hero.titles", { returnObjects: true }) as string[];

  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Reset typing animation when language changes
  useEffect(() => {
    setTitleIndex(0);
    setText("");
    setDeleting(false);
  }, [i18n.language]);

  useEffect(() => {
    const current = titles[titleIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex, titles]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="font-mono text-sm text-primary mb-2">{t("hero.greeting")}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Luis Benvenuto
          </h1>
          <div className="h-10 flex items-center justify-center md:justify-start">
            <span className="font-mono text-xl sm:text-2xl text-primary glow-green">
              {text}
            </span>
            <span className="terminal-cursor font-mono text-xl sm:text-2xl text-primary">|</span>
          </div>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto md:mx-0 font-body leading-relaxed">
            {t("hero.description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_hsl(142,70%,50%,0.3)] transition-all"
            >
              {t("hero.cta_projects")}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary font-mono text-sm font-semibold rounded-lg hover:bg-primary/10 transition-all"
            >
              {t("hero.cta_contact")}
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary glow-border">
            <img src={foto} alt="Luis Benvenuto" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

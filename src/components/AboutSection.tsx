import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">
            <span className="text-primary">{"#"}</span> {t("about.title")}
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-8" />
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border glow-border">
            <p className="text-foreground leading-relaxed mb-4">
              {t("about.p1_part1")}{" "}
              <span className="text-primary font-semibold">{t("about.p1_highlight")}</span>{" "}
              {t("about.p1_part2")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.p2")}</p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p3_part1")}{" "}
              <a href="#contact" className="text-primary hover:underline">
                {t("about.p3_link")}
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const personalProjects = [
  {
    title: "Registro Nacional de Empadronadores del SISFOH",
    org: "MIDIS",
    tech: ["Spring Boot", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    image: "/projects/trabajo1.jpg",
    url: "https://operaciones.sisfoh.gob.pe/remsi/login",
  },
  {
    title: "Reporte Mensual de Personas Afiliadas",
    org: "SUSALUD",
    tech: ["Spring", "JSF", "PrimeFaces", "jQuery", "Bootstrap"],
    image: "/projects/trabajo2.jpg",
    url: "http://app20.susalud.gob.pe:8080/wb_rmpa/",
  },
  {
    title: "Banco de Familias Acogedoras",
    org: "MIMP",
    tech: ["EJB", "JSF", "PrimeFaces", "JavaScript", "CSS"],
    image: "/projects/trabajo3.jpg",
    url: "https://app.mimp.gob.pe/bancofamilia-web/",
  },
];

const teamProjects = [
  {
    title: "App SUNAFIL",
    org: "SUNAFIL",
    tech: ["Java", "Android Studio", "Spring MVC"],
    image: "/projects/trabajo4.jpg",
    url: "https://play.google.com/store/apps/details?id=pe.gob.sunafil.sunafilentusmanos&hl=es_PE",
  },
  {
    title: "Registro Nacional de Trabajadores de Construcción Civil",
    org: "MINTRA",
    tech: ["Spring MVC", "JSF", "PrimeFaces", "jQuery"],
    image: "/projects/trabajo5.jpg",
    url: "https://www2.trabajo.gob.pe/directivas-mtpe/viceministerio-de-trabajo/direccion-general-de-trabajo/direccion-de-registros-nacionales-de-relaciones-de-trabajo/registro-nacional-de-trabajadores-de-construccion-civil-retcc/",
  },
  {
    title: "Registro Nacional de Obras de Construcción Civil",
    org: "MINTRA",
    tech: ["Spring MVC", "JSF", "PrimeFaces", "jQuery"],
    image: "/projects/trabajo6.jpg",
    url: "https://www2.trabajo.gob.pe/directivas-mtpe/viceministerio-de-trabajo/direccion-general-de-trabajo/direccion-de-registros-nacionales-de-relaciones-de-trabajo/registro-nacional-de-obras-de-construccion-civil-renocc/",
  },
  {
    title: "Proyecto Notificaciones Push",
    org: "Confidencial",
    tech: ["Spring Boot", "Java 17", "Spring Security", "Spring Webflux", "MSSql Server"],
    image: "/projects/trabajo7.jpg",
    url: "",
  },
  {
    title: "Proyecto Tipo de Cambio",
    org: "Confidencial",
    tech: ["Spring Boot", "Java 17", "Spring Security", "Spring Webflux", "MSSql Server"],
    image: "/projects/trabajo8.jpg",
    url: "",
  },
  {
    title: "Proyecto Botón de Pago",
    org: "Confidencial",
    tech: ["Spring Boot", "Java 17", "Spring Security", "Spring Webflux", "MSSql Server"],
    image: "/projects/trabajo9.jpg",
    url: "",
  }
];

type Project = (typeof personalProjects)[0];

const ProjectCard = ({ project, index, lang, visit }: { project: Project; index: number; lang: "es" | "en"; visit: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all"
  >
    <div className="relative h-40 overflow-hidden">
      <img
        src={project.image}
        alt={project[lang]}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
      <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-mono bg-primary/20 text-primary border border-primary/30 rounded">
        {project.org}
      </span>
    </div>
    <div className="p-5">
      <h4 className="font-display text-sm font-semibold text-foreground mb-3 line-clamp-2">
        {project[lang]}
      </h4>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-muted text-muted-foreground rounded">
            {t}
          </span>
        ))}
      </div>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
        >
          <ExternalLink size={12} /> {visit}
        </a>
      )}
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const lang: "es" | "en" = i18n.language.startsWith("en") ? "en" : "es";
  const visit = t("projects.visit");

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">
            <span className="text-primary">{"#"}</span> {t("projects.title")}
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10" />
        </motion.div>

        <h3 className="font-mono text-sm text-primary mb-6">{">"} {t("projects.personal")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personalProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} lang={lang} visit={visit} />
          ))}
        </div>

        <h3 className="font-mono text-sm text-primary mb-6">{">"} {t("projects.team")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} lang={lang} visit={visit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
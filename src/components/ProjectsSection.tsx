import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
    url: "https://appweb.mimp.gob.pe:8181/bancofamilia-web/faces/login.xhtml",
  },
];

const teamProjects = [
  {
    title: "App SUNAFIL",
    org: "SUNAFIL",
    tech: ["Java", "Android Studio", "Spring MVC"],
    image: "/projects/trabajo4.jpg",
    url: "https://play.google.com/store/apps/details?id=ssitpmpws.sunafil.gob.pe.consultasolicitud",
  },
  {
    title: "Registro Nacional de Trabajadores de Construcción Civil",
    org: "MINTRA",
    tech: ["Spring MVC", "JSF", "PrimeFaces", "jQuery"],
    image: "/projects/trabajo5.jpg",
    url: "https://appweb.trabajo.gob.pe/si.retcc/",
  },
  {
    title: "Registro Nacional de Obras de Construcción Civil",
    org: "MINTRA",
    tech: ["Spring MVC", "JSF", "PrimeFaces", "jQuery"],
    image: "/projects/trabajo6.jpg",
    url: "https://www.sunat.gob.pe/xssecurity/SignOnVerification.htm",
  },
];

const ProjectCard = ({ project, index }: { project: typeof personalProjects[0]; index: number }) => (
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
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
      <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-mono bg-primary/20 text-primary border border-primary/30 rounded">
        {project.org}
      </span>
    </div>
    <div className="p-5">
      <h4 className="font-display text-sm font-semibold text-foreground mb-3 line-clamp-2">
        {project.title}
      </h4>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-muted text-muted-foreground rounded">
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
      >
        <ExternalLink size={12} /> Visitar
      </a>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">
          <span className="text-primary">{"#"}</span> Proyectos
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-10" />
      </motion.div>

      <h3 className="font-mono text-sm text-primary mb-6">{">"} Trabajos personales</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {personalProjects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <h3 className="font-mono text-sm text-primary mb-6">{">"} Trabajos en equipo</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamProjects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

import { useLanguage } from "../i18n/LanguageContext";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="wrap section-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
      <h6>{t("projects.eyebrow")}</h6>
      <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 0.98, margin: "0 0 40px" }}>
        {t("projects.title")}
      </h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

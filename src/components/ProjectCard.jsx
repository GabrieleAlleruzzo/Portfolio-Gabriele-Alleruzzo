import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/logo-mark.png";

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  const services = project.cardServizi[language] || project.cardServizi.it;
  const servizio = services.length ? services[0] : "";

  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card-media">
        {!loaded && (
          <div className="project-card-loading">
            <img src={logo} alt="" />
          </div>
        )}
        <img
          src={project.cover}
          alt={project.nomeProgetto}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </div>
      <div className="project-card-meta">
        <span>{servizio}</span>
        <span>{project.anno}</span>
      </div>
    </Link>
  );
}

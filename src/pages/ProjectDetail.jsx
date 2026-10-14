import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjectBySlug, pickLocalized } from "../data/projects";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "../components/Icons";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const project = getProjectBySlug(slug);
  const [lightbox, setLightbox] = useState(-1);

  const images = project ? [project.cover, ...project.images].filter(Boolean) : [];

  useEffect(() => {
    if (lightbox < 0) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(-1);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length]);

  if (!project) {
    return (
      <section className="wrap section-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <p>Project not found.</p>
        <Link to="/projects">{t("projectDetail.allProjects")}</Link>
      </section>
    );
  }

  const desc = pickLocalized(project.descrizioneProgetto, language);
  const paragrafi = desc
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
  const servizi = pickLocalized(project.servizi, language) || [];
  const { facebook, instagram, linkedin } = project.social || {};
  const hasSocial = !!(facebook || instagram || linkedin);
  const hasMeta = !!(project.presso || project.anno);

  return (
    <>
      <div className="project-layout">
        <div className="project-info">
          <Link to="/projects" className="back-link">
            {t("projectDetail.allProjects")}
          </Link>
          <h1>{project.nomeProgetto}</h1>

          {paragrafi.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {servizi.length > 0 && (
            <div className="project-services">
              <div className="field-label">{t("projectDetail.services")}</div>
              <ul>
                {servizi.map((s) => (
                  <li key={s} style={{ fontSize: 16 }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasMeta && (
            <div className="project-meta">
              {project.presso && (
                <div>
                  <div className="field-label">{t("projectDetail.at")}</div>
                  <div style={{ fontSize: 17 }}>{project.presso}</div>
                </div>
              )}
              {project.anno && (
                <div>
                  <div className="field-label">{t("projectDetail.year")}</div>
                  <div style={{ fontSize: 17 }}>{project.anno}</div>
                </div>
              )}
            </div>
          )}

          {hasSocial && (
            <div className="project-channels">
              <div className="field-label">{t("projectDetail.channels")}</div>
              <div className="project-channels-links">
                {facebook && (
                  <a href={facebook} target="_blank" rel="noopener noreferrer">
                    <FacebookIcon size={18} /> Facebook
                  </a>
                )}
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon size={18} /> Instagram
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon size={18} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="project-gallery">
          {images.map((src, i) => (
            <button key={src} type="button" onClick={() => setLightbox(i)}>
              <img src={src} alt={`${project.nomeProgetto} — ${i + 1}`} />
            </button>
          ))}
        </div>
      </div>

      {lightbox >= 0 && lightbox < images.length && (
        <div className="lightbox" onClick={() => setLightbox(-1)}>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i - 1 + images.length) % images.length);
            }}
          >
            <ChevronLeftIcon />
          </button>
          <img src={images[lightbox]} alt={project.nomeProgetto} onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i + 1) % images.length);
            }}
          >
            <ChevronRightIcon />
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(-1);
            }}
          >
            <CloseIcon />
          </button>
          <div className="lightbox-counter">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

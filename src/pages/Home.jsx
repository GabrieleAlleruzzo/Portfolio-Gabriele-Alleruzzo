import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Rotator from "../components/Rotator";
import { LogoDesignIcon, BrandIdentityIcon, SocialContentsIcon } from "../components/Icons";
import homeAbout from "../assets/home-about.png";

const serviceIcons = [LogoDesignIcon, BrandIdentityIcon, SocialContentsIcon];

export default function Home() {
  const { t } = useLanguage();
  const services = t("home.services");
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section id="top" className="hero wrap">
        <div>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            {t("home.eyebrow")}
          </div>
          <h1>
            {t("home.heroTitlePrefix")}
            <br />
            <Rotator words={t("home.heroRotator")} />
            <br />
            {t("home.heroTitleSuffix")}
          </h1>
          <p>{t("home.heroDesc")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              {t("home.ctaProjects")}
            </a>
            <Link className="btn" to="/contact">
              {t("home.ctaContact")}
            </Link>
          </div>
        </div>
        <div className="hero-figure" />
      </section>

      <section className="services-section">
        <div className="wrap section-pad">
          <h6>{t("home.servicesEyebrow")}</h6>
          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <article key={service.title} className="card blueprint service-card">
                  <div className="service-card-icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section wrap section-pad">
        <div className="projects-heading">
          <h2>{t("home.projectsTitle")}</h2>
          <Link to="/projects">{t("home.projectsAll")}</Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="home-about">
        <div className="about-grid wrap">
          <div className="about-media">
            <img src={homeAbout} alt="Gabriele Alleruzzo" width={1522} height={1015} />
          </div>
          <div className="about-text">
            <h6>{t("home.aboutEyebrow")}</h6>
            <h2>{t("home.aboutTitle")}</h2>
            <p>{t("home.aboutDesc1")}</p>
            <p>{t("home.aboutDesc2")}</p>
            <div className="hero-actions">
              <Link
                className="btn btn-primary"
                to="/about"
                style={{
                  color: "var(--color-bg)",
                  background: "var(--color-bg)",
                  borderColor: "var(--color-bg)",
                }}
              >
                <span style={{ color: "#38486c" }}>{t("home.aboutCta1")}</span>
              </Link>
              <a
                className="btn"
                href="/Gabriele-Alleruzzo-CV.pdf"
                download="Gabriele-Alleruzzo-CV.pdf"
                style={{ color: "var(--color-neutral-100)", borderColor: "var(--color-bg)" }}
              >
                {t("home.aboutCta2")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="contacts-section wrap section-pad">
        <div className="contacts-grid">
          <div>
            <h6>{t("home.contactsEyebrow")}</h6>
            <h2>{t("home.contactsTitle")}</h2>
            <p>{t("home.contactsDesc")}</p>
          </div>
          <div className="card blueprint contact-card">
            <ContactSummary />
            <Link className="btn btn-primary btn-block" to="/contact" style={{ marginTop: 26 }}>
              {t("home.contactsCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSummary() {
  const { t } = useLanguage();
  return (
    <dl>
      <div>
        <dt>{t("contacts.labels.email")}</dt>
        <dd>
          <a href="mailto:alleruzzoweb@gmail.com">alleruzzoweb@gmail.com</a>
        </dd>
      </div>
      <div>
        <dt>{t("contacts.labels.phone")}</dt>
        <dd>
          <a href="tel:+393492864488">+39 349 286 4488</a>
        </dd>
      </div>
      <div>
        <dt>{t("contacts.labels.basedIn")}</dt>
        <dd>Messina</dd>
      </div>
    </dl>
  );
}

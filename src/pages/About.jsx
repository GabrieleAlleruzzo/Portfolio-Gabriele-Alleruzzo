import { useLanguage } from "../i18n/LanguageContext";
import gabriele from "../assets/gabriele.png";
import abactLogo from "../assets/abact-logo.png";
import mefAtWork from "../assets/mef-at-work.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="about-cols wrap">
        <div>
          <h6>{t("about.eyebrow")}</h6>
          <h1>{t("about.title")}</h1>
          <p>{t("about.desc")}</p>
        </div>
        <div>
          <img src={gabriele} alt="Gabriele Alleruzzo" />
        </div>
      </section>

      <section className="about-cols reverse wrap">
        <div>
          <img src={abactLogo} alt="Accademia di Belle Arti di Catania" />
        </div>
        <div>
          <h6>{t("about.educationEyebrow")}</h6>
          <h2>{t("about.educationTitle")}</h2>
          <p>{t("about.educationDesc")}</p>
        </div>
      </section>

      <section className="about-cols wrap">
        <div>
          <h6>{t("about.practiceEyebrow")}</h6>
          <h2>{t("about.practiceTitle")}</h2>
          <p>{t("about.practiceDesc")}</p>
        </div>
        <div>
          <img src={mefAtWork} alt="Gabriele al lavoro" />
        </div>
      </section>
    </>
  );
}

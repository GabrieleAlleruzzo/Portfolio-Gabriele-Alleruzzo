import { useLanguage } from "../i18n/LanguageContext";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../components/Icons";

export default function Contacts() {
  const { t } = useLanguage();

  return (
    <section className="wrap section-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
      <div className="contacts-grid">
        <div>
          <h6>{t("contacts.eyebrow")}</h6>
          <h2>{t("contacts.title")}</h2>
          <p>{t("contacts.desc")}</p>
        </div>
        <div className="card blueprint contact-card">
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
              <dt>{t("contacts.labels.social")}</dt>
              <dd className="social-links">
                <a
                  href="https://www.instagram.com/gabriele.aller_gd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="gabriele.aller_gd"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063893657369"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Gabriele Alleruzzo Graphic Design"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriele-alleruzzo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="Gabriele Alleruzzo"
                >
                  <LinkedInIcon />
                </a>
              </dd>
            </div>
            <div>
              <dt>{t("contacts.labels.basedIn")}</dt>
              <dd>Messina</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>Gabriele Alleruzzo</span>
        <span className="tagline">{t("footer.tagline")}</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

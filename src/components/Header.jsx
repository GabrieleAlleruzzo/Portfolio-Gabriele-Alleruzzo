import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/logo-mark.png";

const navItems = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/contact", key: "contacts" },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const renderNavLinks = () =>
    navItems.map((item) => (
      <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={closeMenu}>
        {t(`nav.${item.key}`)}
      </NavLink>
    ));

  return (
    <header className="header">
      <div className="header-bar wrap">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Gabriele Alleruzzo" />
          Gabriele Alleruzzo
        </NavLink>

        <nav className="nav-inline">{renderNavLinks()}</nav>

        <button
          type="button"
          className="menu-btn"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="lang-switch">
          {["it", "en", "de"].map((lang) => (
            <button
              key={lang}
              type="button"
              className={language === lang ? "active" : ""}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {menuOpen && <nav className="menu-panel">{renderNavLinks()}</nav>}
    </header>
  );
}

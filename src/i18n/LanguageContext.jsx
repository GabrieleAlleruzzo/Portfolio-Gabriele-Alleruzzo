import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { languages, translations } from "./translations";

const STORAGE_KEY = "ga-portfolio-lang";
const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "it";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return languages.includes(saved) ? saved : "it";
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((lang) => {
    if (!languages.includes(lang)) return;
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage unavailable, ignore */
    }
  }, []);

  const t = useCallback(
    (path) => {
      const value = getByPath(translations[language], path);
      if (value !== undefined) return value;
      return getByPath(translations.it, path);
    },
    [language]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

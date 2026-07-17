import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./messages/es.json";
import en from "./messages/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "en",
    supportedLngs: ["es", "en"],
    interpolation: { escapeValue: false },
    detection: {
      // Solo respetamos una elección guardada; sin preferencia => inglés (fallback)
      order: ["localStorage"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
  });

// Mantener <html lang> sincronizado con el idioma activo
const applyLang = (lng) => {
  document.documentElement.lang = (lng || "es").slice(0, 2);
};
applyLang(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", applyLang);

export default i18n;

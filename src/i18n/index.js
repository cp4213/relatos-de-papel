import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import esTranslations from "./locales/es.json";
import enTranslations from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false
    },
    returnNull: false,
    returnEmptyString: false,
    resources: {
      es: {
        translation: esTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
  });

export default i18n;

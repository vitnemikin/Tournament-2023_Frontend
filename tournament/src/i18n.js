import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: require("./assets/locales/en/translation.json"),
  },
  ru: {
    translation: require("./assets/locales/ru/translation.json"),
  },
  kz: {
    
  },
};

i18next
  .use(LanguageDetector)

  .use(initReactI18next)
  .use(HttpApi)

  .init({
    supportedLngs: ["en", "ru", "kz"],
    debug: true,
    resources,
    lng: document.querySelector("html").lang,
    fallbackLng: "ru",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{translation}}.json",
    },
  });

export default i18next;

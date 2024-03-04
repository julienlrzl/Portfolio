import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importez vos fichiers de traduction
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

// Les ressources de traduction
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // Passez l'instance i18n à react-i18next.
  .init({
    resources,
    lng: "fr", // Langue par défaut
    keySeparator: false, // Utilisez des points dans les clés pour accéder aux objets
    interpolation: {
      escapeValue: false, // Pas besoin d'escaping pour React
    },
  });

export default i18n;

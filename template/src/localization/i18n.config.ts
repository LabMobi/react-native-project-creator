import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en.json';
import translationEST from './est.json';

const resources = {
  en: {
    translation: translationEN,
  },
  est: {
    translation: translationEST,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
});

export const getCurrentLanguage = () => i18n.language;

export default i18n;

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import yaml from 'js-yaml';

export const defaultLng = 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.yaml',
      parse: (data: string) => {
        return yaml.load(data);
      },
    },
    fallbackLng: defaultLng,
    debug: false,

    // have a common namespace used around the full app
    /* ns: ['translations'],
    defaultNS: 'translations', */

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

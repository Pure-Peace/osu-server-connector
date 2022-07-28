import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import yaml from 'js-yaml';

export const supportedLanguages = ['en', 'zh-CN'];
export const defaultLng = 'en';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.yml',
      parse: (data: string) =>
        yaml.load(data) as { [key: string]: string | undefined },
    },
    fallbackLng: defaultLng,
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

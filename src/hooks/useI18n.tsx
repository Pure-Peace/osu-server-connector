import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalForage from './useLocalForage';

const useI18n = () => {
  const { t, i18n, ready } = useTranslation();

  console.log(i18n);
  const [lang, setLang] = useLocalForage('lang', i18n.resolvedLanguage);
  useLayoutEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return { lang, setLang, i18n, t, ready };
};

export default useI18n;

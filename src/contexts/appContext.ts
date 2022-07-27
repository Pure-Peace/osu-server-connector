import { i18n } from 'i18next';
import { createContext } from 'react';
import { TFunction } from 'react-i18next';

export type I18nAttrs = {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  i18n: i18n;
  t: TFunction<'translation', undefined>;
  ready: boolean;
};

export type AppContextProps = {
  i18n: I18nAttrs;
};

export const AppContext = createContext<AppContextProps>({
  i18n: {} as I18nAttrs,
});

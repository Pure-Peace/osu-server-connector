import React from 'react';

import { AppContext } from '../contexts/appContext';

import useI18n from '../hooks/useI18n';

export const AppProvider = (props: React.PropsWithChildren) => {
  const i18n = useI18n();

  return (
    <AppContext.Provider value={{ i18n }}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;

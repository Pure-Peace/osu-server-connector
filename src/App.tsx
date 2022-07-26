import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Components
import AppFrameMiddle from './components/app/AppFrameMiddle';
import AppFrameBottom from './components/app/AppFrameBottom';
import AppFrameTop from './components/app/AppFrameTop';

// Hooks
import useLocalForage from './hooks/useLocalForage';

const AppFragment = styled.div`
  background-color: var(--frame-bg-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

function App() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useLocalForage('lang', i18n.resolvedLanguage);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <AppFragment>
      <AppFrameTop />
      <AppFrameMiddle />
      <AppFrameBottom />
    </AppFragment>
  );
}

export default App;

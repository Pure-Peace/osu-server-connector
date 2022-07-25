import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Components
import AppFrameMiddle from './components/frames/AppFrameMiddle';
import AppFrameBottom from './components/frames/AppFrameBottom';
import AppFrameTop from './components/frames/AppFrameTop';

// Hooks
import useLocalForage from './hooks/useLocalForage';

// Views
import ExampleView from './views/ExampleView';

const AppFragment = styled.div`
  background-color: var(--frame-bg-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

function App() {
  const { t, i18n } = useTranslation();

  const views = [
    { component: ExampleView, path: '/example-view', name: t('ExampleView') },
  ];

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

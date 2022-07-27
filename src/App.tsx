import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Components
import AppFrameMiddle from './components/app/AppFrameMiddle';
import AppFrameBottom from './components/app/AppFrameBottom';
import AppFrameTop from './components/app/AppFrameTop';

// Hooks
import useLocalForage from './hooks/useLocalForage';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { t } from 'i18next';

const AppFragment = styled.div`
  background-color: var(--frame-bg-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

function App() {
  console.log(t('hh'));

  return (
    <RecoilRoot>
      <BrowserRouter>
        <AppFragment>
          <AppFrameTop />
          <AppFrameMiddle />
          <AppFrameBottom />
        </AppFragment>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

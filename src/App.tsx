import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppFrameMiddle from './components/app/AppFrameMiddle';
import AppFrameBottom from './components/app/AppFrameBottom';
import AppFrameTop from './components/app/AppFrameTop';

import AppProvider from './providers/AppProvider';

const AppFragment = styled.div`
  background-color: var(--frame-bg-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppFragment>
          <AppFrameTop />
          <AppFrameMiddle />
          <AppFrameBottom />
        </AppFragment>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

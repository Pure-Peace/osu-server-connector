import styled from 'styled-components';

import AppContent from './AppContent';
import AppFrameSidebar from './AppFrameSidebar';

export const AppFrameMiddleFragment = styled.div`
  display: flex;
  height: calc(100% - var(--frame-top-height) - var(--frame-bottom-height));
`;

export const AppFrameMiddle = () => {
  return (
    <AppFrameMiddleFragment id="app-frame-middle">
      <AppFrameSidebar />
      <AppContent />
    </AppFrameMiddleFragment>
  );
};

export default AppFrameMiddle;

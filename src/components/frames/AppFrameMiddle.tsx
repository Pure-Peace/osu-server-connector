import styled from 'styled-components';

import AppContent from './AppContent';
import AppFrameLeft from './AppFrameLeft';

export const AppFrameMiddleFragment = styled.div`
  display: flex;
  height: calc(100% - var(--frame-top-height) - var(--frame-bottom-height));
`;

export const AppFrameMiddle = () => {
  return (
    <AppFrameMiddleFragment>
      <AppFrameLeft />
      <AppContent />
    </AppFrameMiddleFragment>
  );
};

export default AppFrameMiddle;

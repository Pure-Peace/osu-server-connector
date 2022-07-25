import styled from 'styled-components';

import ToggleDarkMode from '../ToggleDarkMode';

export const AppFrameBottomFragment = styled.div`
  height: var(--frame-bottom-height);
  display: flex;
  align-items: center;
  flex: 1;
  background-color: var(--frame-bg-color);
`;

export const AppFrameBottomLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const AppFrameBottomRight = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const AppFrameBottom = () => {
  return (
    <AppFrameBottomFragment>
      <AppFrameBottomLeft></AppFrameBottomLeft>
      <AppFrameBottomRight>
        <ToggleDarkMode />
      </AppFrameBottomRight>
    </AppFrameBottomFragment>
  );
};

export default AppFrameBottom;

import styled from 'styled-components';
import Github from '../icons/Github';
import LanguageSwitcher from '../LanguageSwitcher';

import ToggleDarkMode from '../DarkModeSwitcher';

export const AppFrameBottomFragment = styled.div`
  height: var(--frame-bottom-height);
  display: flex;
  align-items: center;
  flex: 1;
  background-color: var(--frame-bg-color);
  padding: 0 20px;
`;

export const AppFrameBottomLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const AppFrameBottomRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    margin: 0 5px;
  }
`;

export const AppBottomCopyright = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.2s ease;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  > svg {
    margin-right: 5px;
    font-size: 16px;
  }
`;

export const AppFrameBottom = () => {
  return (
    <AppFrameBottomFragment id="app-frame-bottom">
      <AppFrameBottomLeft>
        <AppBottomCopyright
          href="https://github.com/pure-peace/osu-server-connector"
          target="_blank"
        >
          <Github /> Copyright 2022 Pure-Peace
        </AppBottomCopyright>
      </AppFrameBottomLeft>
      <AppFrameBottomRight>
        <LanguageSwitcher />
        <ToggleDarkMode />
      </AppFrameBottomRight>
    </AppFrameBottomFragment>
  );
};

export default AppFrameBottom;

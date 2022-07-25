import styled from 'styled-components';

import { APP_TITLE } from '../../utils/contants';
import { MinimizeButton, MaximizeButton, CloseButton } from '../ControlButtons';

export const AppTitleAeraFragment = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
`;

export const AppLogo = styled.img`
  height: 48px;
  width: 48px;
  cursor: pointer;
`;

export const AppControlButtonAeraFragment = styled.div``;

export const AppTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 0 10px;
  cursor: pointer;
`;

export const AppFrameTopFragment = styled.div`
  padding: 0 20px;
  height: var(--frame-top-height);
  background-color: var(--frame-bg-color);
  align-items: center;
  display: flex;
  overflow: hidden;
`;

export const AppTitleAera = () => {
  return (
    <AppTitleAeraFragment data-tauri-drag-region>
      <AppLogo data-tauri-drag-region src="images/logo192.png" />
      <AppTitle data-tauri-drag-region>{APP_TITLE}</AppTitle>
    </AppTitleAeraFragment>
  );
};

export const AppControlButtonAera = () => {
  return (
    <AppControlButtonAeraFragment data-tauri-drag-region>
      <MinimizeButton />
      <MaximizeButton />
      <CloseButton />
    </AppControlButtonAeraFragment>
  );
};

export const AppFrameTop = () => {
  return (
    <AppFrameTopFragment data-tauri-drag-region>
      <AppTitleAera />
      <AppControlButtonAera />
    </AppFrameTopFragment>
  );
};

export default AppFrameTop;

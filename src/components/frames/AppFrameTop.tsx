import styled from 'styled-components';

import { APP_TITLE } from '../../utils/contants';
import { MinimizeButton, MaximizeButton, CloseButton } from '../ControlButtons';

export const AppTitleAeraFragment = styled.div`
  display: flex;
  flex: 1;
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
`;

export const AppTitleAera = () => {
  return (
    <AppTitleAeraFragment data-tauri-drag-region>
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

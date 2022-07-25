import { appWindow } from '@tauri-apps/api/window';
import styled from 'styled-components';

import WindowClose from './icons/WindowClose';
import WindowMaximize from './icons/WindowMaximize';
import WindowMinimize from './icons/WindowMinimize';

export const TitlebarButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--frame-bg-color);

  :hover {
    transition: 0.2s background-color;
    background-color: var(--frame-bg-color-hover);
  }

  :active {
    background-color: var(--frame-bg-color-active);
  }
`;

export const MinimizeButton = () => {
  return (
    <TitlebarButton onClick={() => appWindow.minimize()}>
      <WindowMinimize />
    </TitlebarButton>
  );
};

export const MaximizeButton = () => {
  return (
    <TitlebarButton onClick={() => appWindow.toggleMaximize()}>
      <WindowMaximize />
    </TitlebarButton>
  );
};

export const CloseButton = () => {
  return (
    <TitlebarButton onClick={() => appWindow.close()}>
      <WindowClose />
    </TitlebarButton>
  );
};

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import useLocalForage from './hooks/useLocalForage';
import { appWindow } from '@tauri-apps/api/window';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import ToggleDarkMode from './components/ToggleDarkMode';
import ExampleView from './views/ExampleView';

import WindowMinimize from './components/icons/WindowMinimize';
import WindowMaximize from './components/icons/WindowMaximize';
import WindowClose from './components/icons/WindowClose';
import styled from 'styled-components';

const APP_TITLE = `O.S.C - osu! Server Connector`;

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

  const ControlButton = (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  ) => {
    return <div {...props}>{props.children}</div>;
  };

  const MinimizeButton = () => {
    return (
      <ControlButton
        className="titlebar-button"
        id="titlebar-minimize"
        onClick={() => appWindow.minimize()}
      >
        <WindowMinimize />
      </ControlButton>
    );
  };

  const MaximizeButton = () => {
    return (
      <ControlButton
        className="titlebar-button"
        id="titlebar-maximize"
        onClick={() => appWindow.toggleMaximize()}
      >
        <WindowMaximize />
      </ControlButton>
    );
  };

  const CloseButton = () => {
    return (
      <ControlButton
        className="titlebar-button"
        id="titlebar-close"
        onClick={() => appWindow.close()}
      >
        <WindowClose />
      </ControlButton>
    );
  };

  const WindowTitleAera = () => {
    return (
      <div id="app-title-aera" data-tauri-drag-region>
        <div id="app-title" data-tauri-drag-region>
          {APP_TITLE}
        </div>
      </div>
    );
  };

  const WindowControlButtonAera = () => {
    return (
      <div data-tauri-drag-region>
        <MinimizeButton />
        <MaximizeButton />
        <CloseButton />
      </div>
    );
  };

  const AppFrameTop = (props: React.PropsWithChildren) => {
    return (
      <div id="frame-top" data-tauri-drag-region>
        {props.children}
      </div>
    );
  };

  const AppFrameMiddle = (props: React.PropsWithChildren) => {
    return <div id="frame-middle">{props.children}</div>;
  };

  const AppFrameLeft = () => {
    return <div id="frame-left"></div>;
  };

  const AppContent = () => {
    return (
      <div id="app-content">
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: 'leave' } }}
          className="flexbox"
        >
          <div id="app-content-container" className="flexbox"></div>
        </OverlayScrollbarsComponent>
      </div>
    );
  };

  const AppFrameBottom = () => {
    const [state, toggle] = useState(true);
    return (
      <div id="frame-bottom">
        <div id="frame-bottom-left"></div>
        <div id="frame-bottom-right">
          <ToggleDarkMode />
        </div>
      </div>
    );
  };

  return (
    <AppFragment>
      <AppFrameTop>
        <WindowTitleAera />
        <WindowControlButtonAera />
      </AppFrameTop>
      <AppFrameMiddle>
        <AppFrameLeft />
        <AppContent />
      </AppFrameMiddle>
      <AppFrameBottom />
    </AppFragment>
  );
}

export default App;

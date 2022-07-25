import React from 'react';
import ReactDOM from 'react-dom/client';

import 'overlayscrollbars/css/OverlayScrollbars.css';

import App from './App';
import './utils/i18n';
import {
  autoCloseSplashScreen,
  autoComputeWindowRadius,
  preventContextMenu,
  initDarkMode,
} from './utils/app';

autoCloseSplashScreen();
autoComputeWindowRadius();
preventContextMenu();
initDarkMode();

const container = document.getElementById('app') as HTMLElement;

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { invoke } from '@tauri-apps/api/tauri';

export const getPropertiesFromElement = (
  ele: Element,
  properties: string[]
) => {
  return properties.reduce((acc: Record<string, string>, cur) => {
    acc[cur] = getComputedStyle(ele).getPropertyValue(cur);
    return acc;
  }, {});
};

export const getWindowIsMaximize = () =>
  window.outerHeight === screen.availHeight &&
  window.outerWidth === screen.availWidth;

export const autoComputeWindowRadius = () => {
  let initialState = getWindowIsMaximize();
  const initialProperties = getPropertiesFromElement(document.documentElement, [
    '--shadow-size',
    '--border-radius-size',
    '--border-size',
  ]);

  window.onresize = () => {
    const currentState = getWindowIsMaximize();
    if (initialState != currentState) {
      if (currentState) {
        Object.keys(initialProperties).forEach((p) => {
          console.log(p);
          document.documentElement.style.setProperty(p, '0px');
        });
      } else {
        Object.entries(initialProperties).forEach(([p, v]) => {
          console.log(v);
          document.documentElement.style.setProperty(p, v);
        });
      }
      initialState = currentState;
    }
  };
};

export const autoCloseSplashScreen = () => {
  document.addEventListener('DOMContentLoaded', () => {
    invoke('close_splashscreen');
  });
};

export const preventContextMenu = () => {
  document.addEventListener(
    'contextmenu',
    (e) => !import.meta.env.DEV && e.preventDefault()
  );
};

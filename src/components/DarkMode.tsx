import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';
import ToggleButton from './ToggleButton';

export default () => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  return (
    <ToggleButton state={isDarkMode} toggle={toggle}>
      {isDarkMode ? 'Dark' : 'Light'}
    </ToggleButton>
  );
};

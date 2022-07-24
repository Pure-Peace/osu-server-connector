import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';
import CustomButton from './CustomButton';

export default () => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  return (
    <CustomButton onClick={toggle}>
      {isDarkMode ? 'dark' : 'light'}
    </CustomButton>
  );
};

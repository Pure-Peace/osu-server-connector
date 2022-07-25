import { useDarkMode, useUpdateEffect } from 'usehooks-ts';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import ToggleButton from './ToggleButton';

export default () => {
  const { isDarkMode, toggle } = useDarkMode();

  useUpdateEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  return (
    <ToggleButton
      state={isDarkMode}
      toggle={toggle}
      theme={{
        minWidth: 65,
        bodyColorOn: 'var(--content-bg-color)',
        bodyColorOff: 'var(--content-bg-color)',
        contentColorOff: '#000',
      }}
    >
      {isDarkMode ? (
        <Moon style={{ fontSize: '18px', color: '#FFFFAB' }} />
      ) : (
        <Sun style={{ fontSize: '18px' }} />
      )}
    </ToggleButton>
  );
};

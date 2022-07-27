import styled from 'styled-components';
import useI18n from '../hooks/useI18n';
import { cc } from '../utils/common';
import Language from './icons/Language';

export const LanguageSwitcherFragment = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 5px;
  height: 100%;
  z-index: 10;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  :hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(-90%);
  }
`;

export const LanguageSwitcherMenu = styled.div`
  position: absolute;
  top: 0;
  left: -50%;
  transform: translateY(-70%);
  background-color: var(--frame-bg-color);
  border-radius: 14px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.08);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  padding: 5px 0;
  overflow: hidden;

  :hover {
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .menu-item-active {
    color: rgba(var(--vs-primary), 1);
  }
`;

export const LanguageSwitcherMenuItem = styled.div`
  position: relative;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  transition: all 0.2s ease;
  overflow: hidden;

  :hover {
    color: rgba(var(--vs-primary), 1);
  }
`;

export const LanguageSwitcher = () => {
  const { lang, setLang, i18n } = useI18n();

  return (
    <LanguageSwitcherFragment>
      <Language />
      <LanguageSwitcherMenu>
        {i18n.languages.map((locale, index) => (
          <LanguageSwitcherMenuItem
            key={index}
            className={cc({ 'menu-item-active': locale === lang })}
            onClick={() => {
              setLang(locale);
            }}
          >
            {locale}
          </LanguageSwitcherMenuItem>
        ))}
      </LanguageSwitcherMenu>
    </LanguageSwitcherFragment>
  );
};

export default LanguageSwitcher;

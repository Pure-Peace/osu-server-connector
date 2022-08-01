import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base';
import styled from 'styled-components';
import { rewriteOptions } from '../utils/common';

export type ButtonColorGroup = {
  common: string;
  hover: string;
  active: string;
};

export const DEFAULT_THEME = {
  common: '#007FFF',
  hover: '#0072E5',
  active: '#0059B2',
};

export const CustomButtonWithTheme = (props: {
  colorGroup?: ButtonColorGroup;
}) => {
  const theme = rewriteOptions(DEFAULT_THEME, props.colorGroup);

  return styled(ButtonUnstyled)`
    background-color: ${theme.common};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${theme.hover};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${theme.active};
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
};

export const CustomButton = CustomButtonWithTheme({
  colorGroup: DEFAULT_THEME,
});

export default CustomButton;

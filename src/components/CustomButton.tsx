import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base';
import styled from 'styled-components';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

export default styled(ButtonUnstyled)`
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

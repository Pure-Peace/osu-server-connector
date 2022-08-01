import React from 'react';
import styled from 'styled-components';
import { CustomButtonWithTheme } from './CustomButton';

export const CardFragment = styled.div`
  width: 340px;
  height: 410px;
  border: 3px solid var(--frame-bg-color);
  border-radius: 30px;
  padding: 10px;
  display: flex;
  align-items: stretch;
  transition: all 0.2s ease;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 20px;
  overflow: hidden;
`;

export const CardContent = styled.div``;

export const CardAction = styled.div`
  background-color: var(--frame-bg-color);
  border-radius: 10px 10px 30px 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
`;

export const CardActionButton = styled(
  CustomButtonWithTheme({
    colorGroup: { common: '#2444FF', hover: '#3a57ff', active: '#5069ff' },
  })
)`
  border-radius: 8px 8px 20px 8px;
`;

export const Card = (
  props: React.PropsWithChildren & { action?: React.ReactNode }
) => {
  return (
    <CardFragment>
      <CardBody>
        <CardContent>{props.children}</CardContent>
        {props.action && <CardAction>{props.action}</CardAction>}
      </CardBody>
    </CardFragment>
  );
};

export default Card;

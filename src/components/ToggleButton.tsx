/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';

const ToggleButtonBody = styled.div`
  position: relative;
  cursor: pointer;
`;

const ToggleButtonCircle = styled.div`
  transition: all 0.2s ease;
  border-radius: 100%;
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 5px 15px 0 rgb(0, 0, 0, 0.15);
`;

const ToggleButtonContent = styled.span`
  transition: all 0.2s ease;
  user-select: none;
  position: absolute;
  top: 0;
  z-index: 9;
  top: 50%;
  transform: translateY(-50%);
`;

type ToggleButtonTheme = {
  bodyColorOn?: string;
  bodyColorOff?: string;
  circleColorOn?: string;
  circleColorOff?: string;
  borderRadius?: string;
  minWidth?: string;
  minHeight?: string;
  fontSize?: string;
  borderSize?: string;
  contentColor?: string;
};

const DEFAULT_THEME: ToggleButtonTheme = {
  bodyColorOn: 'rgba(var(--color-primary), 1)',
  bodyColorOff: 'rgba(var(--color-primary), 1)',
  circleColorOn: 'var(--frame-bg-color)',
  circleColorOff: 'var(--frame-bg-color)',
  borderRadius: '30px',
  minWidth: '80px',
  minHeight: '35px',
  fontSize: '16px',
  borderSize: '5px',
  contentColor: '#fff',
};

const ToggleButton = (
  props: {
    state: boolean;
    toggle: (...args: any) => any;
    theme?: ToggleButtonTheme;
  } & React.PropsWithChildren
) => {
  const s = (on?: string, off?: string) => (props.state ? on : off);
  const t = Object.assign(props.theme || {}, DEFAULT_THEME);

  const circleRadius =
    parseFloat(t.minHeight as string) - parseFloat(t.borderSize as string) * 2;
  return (
    <ToggleButtonBody
      style={{
        backgroundColor: s(t.bodyColorOn, t.bodyColorOff),
        color: s(t.bodyColorOn, t.bodyColorOff),
        borderRadius: t.borderRadius,
        minWidth: t.minWidth,
        minHeight: t.minHeight,
      }}
      onClick={() => props.toggle(!props.state)}
    >
      <ToggleButtonCircle
        className="circle"
        style={{
          width: `${circleRadius}px`,
          height: `${circleRadius}px`,
          backgroundColor: s(t.circleColorOn, t.circleColorOff),
          left: s(
            `calc(100% - ${circleRadius}px - ${t.borderSize})`,
            t.borderSize
          ),
        }}
      />
      <ToggleButtonContent
        style={{
          left: s(`calc(${t.borderSize} * 2)`, `calc(100% - 45px)`),
          lineHeight: `${circleRadius}px`,
          height: `${circleRadius}px`,
          width: `calc(100% - (${t.borderSize} * 4) - ${circleRadius}px)`,
          fontSize: t.fontSize,
          color: t.contentColor,
        }}
      >
        {props.children}
      </ToggleButtonContent>
    </ToggleButtonBody>
  );
};

export default ToggleButton;

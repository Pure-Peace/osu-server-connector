/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from 'styled-components';

type PropsToggleButtonBody = {
  activeIncrease: number;
  circleRadius: number;
};

const ToggleButtonBody = styled.div<PropsToggleButtonBody>`
  position: relative;
  user-select: none;
  overflow: hidden;

  cursor: pointer;

  :active .circle-on {
    margin-left: -${(props) => props.activeIncrease}px;
    width: ${(props) => props.circleRadius + props.activeIncrease}px !important;
  }

  :active .circle-off {
    width: ${(props) => props.circleRadius + props.activeIncrease}px !important;
  }
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

const ToggleButtonContent = styled.div`
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  z-index: 9;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  display: flex;
  align-items: center;
`;

type ToggleButtonTheme = {
  bodyColorOn: string;
  bodyColorOff: string;
  circleColorOn: string;
  circleColorOff: string;
  contentColorOn: string;
  contentColorOff: string;
  borderRadius: number;
  minWidth: number;
  minHeight: number;
  fontSize: number;
  borderSize: number;
  activeIncrease: number;
};

const DEFAULT_THEME: ToggleButtonTheme = {
  bodyColorOn: 'rgba(var(--color-primary), 1)',
  bodyColorOff: 'rgba(var(--color-primary), 1)',
  circleColorOn: 'var(--frame-bg-color)',
  circleColorOff: 'var(--frame-bg-color)',
  contentColorOn: '#fff',
  contentColorOff: '#fff',
  borderRadius: 30,
  minWidth: 80,
  minHeight: 35,
  fontSize: 16,
  borderSize: 5,
  activeIncrease: 5,
};

const ToggleButton = (
  props: {
    state: boolean;
    toggle: (...args: unknown[]) => unknown;
    theme?: {
      [Property in keyof ToggleButtonTheme]?: string | number | undefined;
    };
  } & React.PropsWithChildren
) => {
  const px = (val: string | number) => `${val}px`;
  const s = (on?: string, off?: string) => (props.state ? on : off);

  const t = Object.assign({ ...DEFAULT_THEME }, props.theme);
  const circleRadius = t.minHeight - t.borderSize * 2;

  return (
    <ToggleButtonBody
      circleRadius={circleRadius}
      activeIncrease={t.activeIncrease}
      style={{
        backgroundColor: s(t.bodyColorOn, t.bodyColorOff),
        color: s(t.bodyColorOn, t.bodyColorOff),
        borderRadius: px(t.borderRadius),
        minWidth: px(t.minWidth),
        minHeight: px(t.minHeight),
      }}
      onClick={() => props.toggle(!props.state)}
    >
      <ToggleButtonCircle
        className={s('circle-on', 'circle-off')}
        style={{
          width: px(circleRadius),
          height: px(circleRadius),
          backgroundColor: s(t.circleColorOn, t.circleColorOff),
          left: s(
            `calc(100% - ${px(circleRadius + t.borderSize)})`,
            px(t.borderSize)
          ),
        }}
      />
      <ToggleButtonContent
        style={{
          left: s(px(t.borderSize * 2), px(t.borderSize * 3 + circleRadius)),
          height: px(circleRadius),
          width: `calc(100% - ${px(t.borderSize * 4 + circleRadius)})`,
          fontSize: t.fontSize,
          color: s(t.contentColorOn, t.contentColorOff),
        }}
      >
        {props.children}
      </ToggleButtonContent>
    </ToggleButtonBody>
  );
};

export default ToggleButton;

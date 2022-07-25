import styled from 'styled-components';

export const AppFrameLeftFragment = styled.div`
  background-color: var(--frame-bg-color);
  min-width: calc(var(--frame-top-height) * 2);
`;

export const AppFrameLeft = () => {
  return <AppFrameLeftFragment></AppFrameLeftFragment>;
};

export default AppFrameLeft;

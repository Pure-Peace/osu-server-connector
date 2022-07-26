import styled from 'styled-components';

export const FallbackFragment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Fallback = () => {
  return <FallbackFragment>Loading</FallbackFragment>;
};

export default Fallback;

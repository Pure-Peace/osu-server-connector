import styled from 'styled-components';

import ServerItem from './ServerItem';

export const ServerListFragment = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    margin: 0 20px 20px 0;
  }
`;

export const ServerList = () => {
  return (
    <ServerListFragment>
      {Array.from(Array(10)).map((_, idx) => (
        <ServerItem key={idx} />
      ))}
    </ServerListFragment>
  );
};

export default ServerList;

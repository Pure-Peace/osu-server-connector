import styled from 'styled-components';
import Add from './icons/Add';
import Cog from './icons/Cog';
import Refresh from './icons/Refresh';

import ServerItem from './ServerItem';

export type ServerProps = {
  cover?: string;
  title: string;
  content: string;
};

export const ServerListFragment = styled.div``;

export const ServerListHead = styled.div`
  text-align: center;
`;

export const ServerListTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 5px;
  color: rgba(var(--color-primary), 1);
`;

export const ServerListHandle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  svg {
    cursor: pointer;
    transition: all 0.2s ease;
    opacity: 0.8;
    padding: 5px;
  }

  svg:hover {
    opacity: 1;
  }
`;

export const ServerListContent = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  > div {
    width: calc(50% - 40px);
    margin: 5px;
  }
`;

export const ServerList = (props: { servers: ServerProps[] }) => {
  const { servers } = props;
  return (
    <ServerListFragment>
      <ServerListHead>
        <ServerListTitle>{servers.length} Servers founded</ServerListTitle>
        <ServerListHandle>
          <Add />
          <Refresh />
          <Cog />
        </ServerListHandle>
      </ServerListHead>
      <ServerListContent>
        {servers.map((server, index) => (
          <ServerItem key={index} server={server} />
        ))}
      </ServerListContent>
    </ServerListFragment>
  );
};

export default ServerList;

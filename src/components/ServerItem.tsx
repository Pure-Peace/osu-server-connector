import styled from 'styled-components';

import ServerIcon from '../components/icons/Server';

import DefaultImage from './DefaultImage';
import { ServerProps } from './ServerList';

const ServerItemFragment = styled.div`
  background-color: var(--frame-bg-color);
  border-radius: 20px;
  height: 100px;
  box-shadow: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: stretch;
  padding: 15px;
  overflow: hidden;
  cursor: pointer;

  :hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const ServerItemCover = styled.div`
  background-color: var(--content-bg-color);
  border-radius: 20px;
  position: relative;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServerItemCoverImg = styled(DefaultImage)`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

const ServerItemBody = styled.div`
  width: 185px;
  display: flex;
  flex-direction: column;
  padding: 5px 0 5px 15px;
`;

const ServerItemTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const ServerItemContent = styled.div`
  padding: 10px 0;
  font-size: 14px;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ServerItemAction = styled.div``;

const DefaultServerIcon = styled(ServerIcon)`
  height: 50%;
  width: 50%;
  opacity: 0.9;
`;

const ServerItem = (props: { server: ServerProps }) => {
  const { server } = props;
  return (
    <ServerItemFragment>
      <ServerItemCover>
        {server.cover ? (
          <ServerItemCoverImg src={server.cover} />
        ) : (
          <DefaultServerIcon />
        )}
      </ServerItemCover>
      <ServerItemBody>
        <ServerItemTitle>{server.title}</ServerItemTitle>
        <ServerItemContent>{server.content}</ServerItemContent>
        <ServerItemAction>
          <ServerIcon />
        </ServerItemAction>
      </ServerItemBody>
    </ServerItemFragment>
  );
};

export default ServerItem;

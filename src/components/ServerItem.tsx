import styled from 'styled-components';

import ServerIcon from '../components/icons/Server';

import DefaultImage from './DefaultImage';

const ServerItemFragment = styled.div`
  background-color: var(--frame-bg-color);
  border-radius: 20px;
  width: 300px;
  height: 100px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  display: flex;
  align-items: stretch;
  padding: 15px;
  overflow: hidden;

  :hover {
    box-shadow: none;
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

const ServerItem = (props: { cover?: string }) => {
  return (
    <ServerItemFragment>
      <ServerItemCover>
        {props.cover ? (
          <ServerItemCoverImg src={props.cover} />
        ) : (
          <DefaultServerIcon />
        )}
      </ServerItemCover>
      <ServerItemBody>
        <ServerItemTitle>ppy.sb</ServerItemTitle>
        <ServerItemContent>这是sb服</ServerItemContent>
        <ServerItemAction>
          <ServerIcon />
        </ServerItemAction>
      </ServerItemBody>
    </ServerItemFragment>
  );
};

export default ServerItem;

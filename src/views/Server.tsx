import { useContext } from 'react';
import styled from 'styled-components';

import ServerList from '../components/ServerList';

import { AppContext } from '../contexts/appContext';

const ServerFragment = styled.div``;

const Server = () => {
  const {
    i18n: { t },
  } = useContext(AppContext);

  return (
    <ServerFragment>
      <ServerList />
    </ServerFragment>
  );
};

export default Server;

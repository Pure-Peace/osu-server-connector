import { useContext } from 'react';
import styled from 'styled-components';

import ServerList, { ServerProps } from '../components/ServerList';

import { AppContext } from '../contexts/appContext';

const ServerFragment = styled.div``;

const Server = () => {
  const {
    i18n: { t },
  } = useContext(AppContext);

  const serverList: ServerProps[] = [
    {
      cover: undefined,
      title: 'ppy.sb',
      content: 'sb服',
    },
    {
      cover: undefined,
      title: 'ppy.sb',
      content: 'sb服',
    },
    {
      cover: undefined,
      title: 'ppy.sb',
      content: 'sb服',
    },
    {
      cover: undefined,
      title: 'ppy.sb',
      content: 'sb服',
    },
    {
      cover: undefined,
      title: 'ppy.sb',
      content: 'sb服',
    },
  ];

  return (
    <ServerFragment>
      <ServerList servers={serverList} />
    </ServerFragment>
  );
};

export default Server;

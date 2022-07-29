import Home from './views/Home';
import Config from './views/Config';
import Server from './views/Server';

import HomeIcon from './components/icons/Home';
import ServerIcon from './components/icons/Server';
import Code from './components/icons/Code';

const routes = [
  { component: Home, path: '/', name: 'Home', icon: <HomeIcon /> },
  { component: Server, path: '/Server', name: 'Server', icon: <ServerIcon /> },

  {
    component: Config,
    path: '/Config',
    name: 'Config',
    icon: <Code />,
  },
];

export default routes;

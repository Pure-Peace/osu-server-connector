import Home from './views/Home';
import ExampleView from './views/ExampleView';

import HomeIcon from './components/icons/Home';
import Code from './components/icons/Code';

const routes = [
  { component: Home, path: '/', name: 'Home', icon: <HomeIcon /> },
  {
    component: ExampleView,
    path: '/ExampleView',
    name: 'ExampleView',
    icon: <Code />,
  },
];

export default routes;

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routes';
import { cc } from '../../utils/common';
import { SidebarMenu, SidebarMenuItem } from '../Sidebar';

export const AppFrameSidebarFragment = styled.div`
  background-color: var(--frame-bg-color);
  width: var(--frame-sidebar-width);
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  overflow: hidden;
`;

export const AppFrameSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppFrameSidebarFragment id="app-frame-sidebar">
      <SidebarMenu>
        {routes.map((route, index) => (
          <SidebarMenuItem
            key={index}
            title={route.name}
            icon={route.icon}
            onClick={() => navigate(route.path)}
            className={cc({
              'sidebar-menu-item-active': location.pathname === route.path,
            })}
          />
        ))}
      </SidebarMenu>
    </AppFrameSidebarFragment>
  );
};

export default AppFrameSidebar;

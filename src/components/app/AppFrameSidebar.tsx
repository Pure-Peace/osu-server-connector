import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routes';

export const AppFrameSidebarFragment = styled.div`
  background-color: var(--frame-bg-color);
  width: calc(var(--frame-top-height) * 2);
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const SidebarMenuItemFragment = styled.div`
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 47px;
  opacity: 0.8;
  transition: all 0.25s ease;
  font-size: 16px;
  font-weight: 700;

  :hover {
    opacity: 1;
    padding-left: 8px;
  }
`;

export const SidebarMenuItem = (
  props: React.DOMAttributes<HTMLDivElement> & { icon?: string; title?: string }
) => {
  return <SidebarMenuItemFragment>{props.title}</SidebarMenuItemFragment>;
};

export const AppFrameSidebar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <AppFrameSidebarFragment id="app-frame-sidebar">
      {routes.map((route, index) => (
        <SidebarMenuItem key={index} title={route.name} />
      ))}
    </AppFrameSidebarFragment>
  );
};

export default AppFrameSidebar;

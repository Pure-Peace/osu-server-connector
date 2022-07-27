import styled from 'styled-components';

export const SidebarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .sidebar-menu-item-active {
    opacity: 1 !important;
    color: rgba(var(--vs-primary), 1);
    padding-left: 8px;
  }

  .sidebar-menu-item-active::after {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
`;

export const SidebarMenuItemFragment = styled.div`
  position: relative;
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
  overflow: hidden;
  width: var(--frame-sidebar-width);

  :hover {
    opacity: 1;
    padding-left: 8px;
  }

  ::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 100%;
    background: rgba(var(--vs-primary), 1);
    border-radius: 0 20px 20px 0;
    -webkit-transform: translate(-6px);
    transform: translate(-6px);
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    z-index: 60;
  }
`;

export const SidebarMenuItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 47px;
`;

export const SidebarMenuItemTitle = styled.div`
  text-overflow: ellipsis;
`;

export const SidebarMenuItem = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode;
    titleContent?: React.ReactNode;
  }
) => {
  return (
    <SidebarMenuItemFragment {...props}>
      <SidebarMenuItemIcon>{props.icon}</SidebarMenuItemIcon>
      <SidebarMenuItemTitle>{props.titleContent}</SidebarMenuItemTitle>
    </SidebarMenuItemFragment>
  );
};

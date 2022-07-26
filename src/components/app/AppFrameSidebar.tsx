import styled from 'styled-components';

export const AppFrameSidebarFragment = styled.div`
  background-color: var(--frame-bg-color);
  min-width: calc(var(--frame-top-height) * 2);
`;

export const AppFrameSidebar = () => {
  return (
    <AppFrameSidebarFragment id="app-frame-sidebar"> </AppFrameSidebarFragment>
  );
};

export default AppFrameSidebar;

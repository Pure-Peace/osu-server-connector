import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import styled from 'styled-components';
import AppRouter from './AppRouter';

export const AppContentFragment = styled.div`
  flex: 1;
  display: flex;
  background-color: var(--content-bg-color);
  border-radius: 30px 0 0 30px;
  overflow: hidden;
  padding: 5px;
`;

export const AppContentContainer = styled(OverlayScrollbarsComponent)`
  flex: 1;
  display: flex;
  width: calc(100% - 25px);
`;

export const AppContent = () => {
  return (
    <AppContentFragment id="app-content">
      <AppContentContainer
        options={{ scrollbars: { autoHide: 'leave' } }}
        className="flexbox app-container"
      >
        <AppRouter />
      </AppContentContainer>
    </AppContentFragment>
  );
};

export default AppContent;

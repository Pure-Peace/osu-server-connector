import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import styled from 'styled-components';

export const AppContentFragment = styled.div`
  flex: 1;
  display: flex;
  background-color: var(--content-bg-color);
  border-radius: 30px 0 0 30px;
  overflow: hidden;
  padding: 20px 5px 5px 20px;
`;

export const AppContentContainer = styled.div``;

export const AppContent = () => {
  return (
    <AppContentFragment>
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'leave' } }}
        className="flexbox"
      >
        <AppContentContainer className="flexbox"></AppContentContainer>
      </OverlayScrollbarsComponent>
    </AppContentFragment>
  );
};

export default AppContent;

import styled from 'styled-components';

export const ContainerLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: var(--dark);
  color: var(--white);
  position: relative;
`;

export const ContentContainerLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  max-height: 100vh;
  overflow: auto;
`;

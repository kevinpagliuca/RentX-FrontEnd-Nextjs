import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  grid-gap: 8rem;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display:flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 7rem);
    .imageContainer {
      display: none !important;
    }
  }
`;

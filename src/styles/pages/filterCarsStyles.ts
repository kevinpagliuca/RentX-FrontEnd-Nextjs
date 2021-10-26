import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4rem;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 7rem);
    .imageContainer {
      display: none !important;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 3rem;
  font-weight: 600;
  font-family: 'Archivo', sans-serif;
  color: var(--gray-500);
  max-width: 28rem;
  text-align: center;
  margin: 0 auto 1.5rem;
`;

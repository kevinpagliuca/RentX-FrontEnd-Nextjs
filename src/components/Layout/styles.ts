import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: var(--gray-50);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--gray-50);
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    min-height: calc(100vh - 5rem);
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--gray-50);
  padding: 7.5rem;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1600px) {
    padding: 7.5rem 2.5rem 2.5rem;
  }
`;

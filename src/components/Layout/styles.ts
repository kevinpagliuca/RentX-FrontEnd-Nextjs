import styled, { css } from 'styled-components';

interface ContainerProps {
  whiteBackground?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: var(--gray-50);

  ${({ whiteBackground }) =>
    whiteBackground &&
    css`
      background: var(--white);
    `}

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
  overflow: hidden;

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
  padding: 7.5rem 7.5rem 0;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

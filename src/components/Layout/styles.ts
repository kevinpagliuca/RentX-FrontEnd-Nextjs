import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;

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
  padding: 2.5rem 7.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

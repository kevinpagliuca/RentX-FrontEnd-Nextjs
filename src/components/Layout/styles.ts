import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 5rem);
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--gray-50);
  padding: 2.5rem 7.5rem;
`;

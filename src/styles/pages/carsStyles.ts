import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Archivo', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.5rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;

  .buttonRent {
    margin-top: 7rem;
  }
`;

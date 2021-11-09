import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: auto 0;
`;

export const CarDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 27rem;
  position: relative;

  .buttonRent {
    margin-top: 1rem;
    width: 100%;
  }
`;

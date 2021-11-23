import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--gray-500);
  border-radius: 8px;
  padding: 1rem 1.5rem;

  .carImage {
    width: 4rem;
    height: 4rem;
    border: 1px solid var(--gray-400);
    background: var(--gray-500);
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

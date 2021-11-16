import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > label {
    font: 500 1rem 'Inter', sans-serif;
    color: var(--gray-50);
    user-select: none;
  }
`;

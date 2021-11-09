import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--gray-100);
  height: 4rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 4rem;
  min-width: 4rem;
  border-right: 1px solid var(--white);
  color: var(--gray-500);
`;

export const DetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  text-align: center;

  p,
  span {
    font-family: 'Inter', sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
    color: var(--gray-400);
  }
`;

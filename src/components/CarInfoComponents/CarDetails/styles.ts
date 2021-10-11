import styled from 'styled-components';

export const Container = styled.div`
  width: 23.875rem;
  height: 13rem;
  display: grid;
  grid-template-columns: 0fr 0fr;
  gap: 0.5rem;
`;

export const ContainerContent = styled.div`
  padding: 0rem 1rem 0rem 0rem;
  display: flex;
  justify-content: space-between;
  background: var(--gray-200);
  width: 11.75rem;
  height: 4rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  border-right: 1px solid var(--white);
`;

export const ContainerLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0em;
  color: var(--gray-500);
`;

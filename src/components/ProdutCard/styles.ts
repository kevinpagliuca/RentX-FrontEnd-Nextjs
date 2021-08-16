import styled from "styled-components";


export const Container = styled.div`
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 500;

  max-width: 22.5rem;
  max-height: 18rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 1px 3px 6px rgba(0,0,0,0.25);
  width: 100%;

  

  header {
    padding: 2.5rem;
    height: 13rem;
    border-radius: 12px;    
  }

  footer {
    display: flex;
    height: 5rem;
    padding: 1.25rem;

    border-top: 1px solid var(--gray-100);
  }
`;

export const ContentFooter = styled.div`
  p {
    font-size: 0.75rem;
    line-height: 0.813rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
    color: var(--gray-350);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 1.25rem;
    line-height: 1.3rem;
    max-width: 170px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--gray-500);

    &.rentAmount {
      color: var(--main);
    }
  }

  & + & {
    margin-left: auto;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-350);
  }
`;

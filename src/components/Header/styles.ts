import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  max-height: 5rem;
  height: 5rem;
  width: 100%;
  background: var(--white);
  z-index: 100;

  button {
    height: 100%;
    width: 5rem;
    border: 0;
    background: var(--main);
    color: var(--white);
  }
`;


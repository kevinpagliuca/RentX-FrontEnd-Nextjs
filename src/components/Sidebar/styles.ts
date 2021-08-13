import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 5rem;
  min-width: 5rem;
  height: 100vh;
  position: sticky;
  top: 5rem;
  z-index: 10;
  background: var(--dark);

  > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top: 120px;
    width: 100%;
    color: var(--gray-500);

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 100%;
      position: relative;

      & + button {
        margin-top: 1rem;
      }

      &.active {
        background: var(--black);
        color: var(--white);

        &::before {
          content: "";
          position: absolute;
          left: 0;
          width: 3px;
          background: var(--main);
          height: 100%;
        }
      }
    }
  }
`;

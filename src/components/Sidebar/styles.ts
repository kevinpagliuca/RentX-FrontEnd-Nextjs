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

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 5rem;
    bottom: 0;
    background: var(--gray-50);

    nav {
      flex-direction: row;

      button.active {
        background: transparent;
        color: var(--main);

        &::before {
          /* display: none; */
          bottom: 0;
          height: 2px;
          width: 4px;
          left: 50%;
          right: 50%;
          transform: translate(-50%, 50%);
        }
      }
    }
  }
`;

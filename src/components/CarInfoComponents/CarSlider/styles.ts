import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  max-width: 600px;
  gap: 1.5rem;
  height: fit-content;
  background: var(--gray-50);
  border: 2px solid var(--gray-100);

  > div {
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    .carouselCarContent {
      padding: 0 1rem;
    }
  }

  img {
    padding: 5rem 2rem;
    object-fit: contain;
    height: 100%;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    img {
      width: 100% !important;
    }
  }
`;

export const SliderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem;
  border-top: 2px solid var(--gray-100);

  > button {
    position: relative;
    height: 100%;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    svg {
      position: absolute;
      transform: translate3d(-50%);
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;

    li {
      width: 4px;
      height: 4px;

      border-radius: 50%;

      &.slick-active button {
        background: #41414d;
      }

      button {
        color: transparent;
        border: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #aeaeb3;
      }
    }
  }
`;

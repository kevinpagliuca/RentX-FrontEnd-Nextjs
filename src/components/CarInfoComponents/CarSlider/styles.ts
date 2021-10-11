import styled from 'styled-components';

export const Container = styled.div`
  img {
    padding: 0 3rem !important;
    height: 100%;
  }

  .carouselCarContent {
    display: inline-block;
    width: 100%;
  }

  @media (max-width: 1200px) {
    img {
      width: 100% !important;
    }
  }
`;

export const SliderFooter = styled.div`
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;

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

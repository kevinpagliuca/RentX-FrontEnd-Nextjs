import { ButtonBase, Slider, SwipeableDrawer } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(SwipeableDrawer)`
  filter: drop-shadow(0px 0px 64px rgba(0, 0, 0, 0.1));
  width: 100%;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  background: var(--gray-50);
  padding: 4rem 2.5rem;
  gap: 2rem;
  flex: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--gray-300);

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Archivo', sans-serif;
    color: var(--gray-500);
  }

  svg {
    cursor: pointer;
    color: var(--gray-350);
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  color: var(--gray-450);
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 500;
      color: var(--main);
    }
  }
`;

export const SliderStyled = styled(Slider)`
  margin-top: 1rem;

  .MuiSlider-rail {
    background: var(--gray-300) !important;
    border: 0 !important;
    opacity: 1 !important;
  }

  .MuiSlider-thumb {
    background: var(--white) !important;
    border-radius: 4px !important;
    width: 2rem !important;
    height: 1.5rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    &::after {
      content: '| |';
      font-size: 8px !important;
      line-height: 8px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: var(--gray-350) !important;
      width: 100%;
    }
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;

  div.buttonsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: var(--white);
    padding: 0.25rem;
    min-height: 4rem;

    button {
      display: flex;
      flex-direction: column;
      color: var(--gray-350);
      width: 100%;
      height: 100%;
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      transition: all 0.3s;

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        width: 100%;
        padding: 0.5rem 0;
        height: 100%;
        transition: all 0.3s;
      }

      svg {
        margin-bottom: 0.5rem;
        color: var(--gray-350);
        transition: all 0.3s !important;
      }

      &.active {
        background: var(--gray-50);
        color: var(--gray-450);

        svg {
          color: var(--main);
        }
      }
    }
  }
`;

export const TransmissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;

  div.buttonsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: var(--white);
    padding: 0.25rem;

    button {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0;
      width: 7rem;
      color: var(--gray-350);
      transition: all 0.3s;

      svg {
        margin-bottom: 0.5rem;
        transition: all 0.3s;
      }

      &.active {
        background: var(--gray-50);
        color: var(--gray-450);

        svg {
          color: var(--main);
        }
      }
    }
  }
`;

import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  max-width: 53rem;
  margin: 0 auto;
  background: var(--white);
  border-radius: 8px;
  position: relative;
  padding: 2rem;
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex: 1;

  * {
    font-family: 'Inter';
  }

  .custom-calendar {
    width: 100%;
    max-width: 25rem;
    box-shadow: none !important;

    abbr {
      border-bottom: 1px solid var(--gray-100);
      padding: 1rem 0;
    }

    .Calendar__day {
      border-radius: 0px !important;
    }
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    grid-gap: 1rem;
  }

  //Custom Calendar

  .Calendar__day.-ltr.-selectedStart {
    border-radius: 0px !important;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }

  .Calendar__day.-ltr.-selectedEnd {
    border-radius: 0px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
`;

export const RangeInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 256px;
  margin: 0 0 2rem auto;

  .inputsContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-size: 1rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 500;
      color: var(--gray-350);
    }

    strong {
      font-size: 2rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      line-height: 2.25rem;
      color: var(--gray-500);
    }

    div {
      width: 100%;
      height: 1px;
      border-radius: 5px;
      background: var(--gray-350);
      margin: 2.5rem 0;
    }
  }
`;

export const TextFieldStyled = styled(TextField).attrs({
  variant: 'filled',
})``;

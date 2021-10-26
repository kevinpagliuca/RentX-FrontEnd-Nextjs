import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 850px;
  height: 100%;
  color: var(--gray-350);
  background: var(--white);
  border-radius: 8px;
  transition: all 0.3s;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: var(--dark);
  padding: 1.75rem 3rem;
  position: relative;
  border-radius: 8px 8px 0 0;

  > span {
    color: var(--white);
  }

  > button {
    position: absolute;
    right: 0;
    width: 5rem;
    height: 100%;
    font-size: 30px;
    transition: all 0.3s;
    &:hover {
      color: var(--main);
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  border-radius: 0 0 8px 8px;
  position: relative;
  padding: 1rem 4rem 1rem 4rem;

  /* .MuiButtonBase-root.MuiPickersDay-root.MuiDateRangePickerDay-day {
    width: 42px !important;
    height: 42px !important;
  }

  .MuiTypography-root.MuiTypography-caption {
    width: 42px !important;
    height: 42px !important;
  } */

  .rangeDateInput {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 256px;
    margin-left: auto;
    margin-top: 1rem;
  }




`;

export const DatePickerContainer = styled.div`
  position: sticky;
  top: 1rem;
  bottom: 1rem;
  * {
    font-family: 'Inter';
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    grid-gap: 1rem;
  }


    //Custom Calendar



    .Calendar__day.-ltr.-selectedStart{
      border-radius: 0px !important;
      border-top-right-radius:0px !important;
      border-bottom-right-radius:0px !important;
}

.Calendar__day.-ltr.-selectedEnd{
  border-radius: 0px !important;
  border-top-right-radius:0 !important;
      border-bottom-right-radius:0 !important;

}


/* .custom-today-day {
  color: #DC1637 !important;
  border: 1px solid #DC1637 !important;
} */




`;

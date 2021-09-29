import styled from 'styled-components';

export const Container = styled.div``;

export const CarContainer = styled.div`
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37.4rem;
  height: 12.5rem;
  background-color: var(--white);
  .divImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    /* padding-left: 50px; */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  color: var(--);
  border: 1px solid #ebebf0;
  box-sizing: border-box;
  .p {
    font: 500 2.25rem 'Archivo', sans-serif;
    color: var(--gray-350);
  }
  .h1 {
    font: 500 1, 12rem 'Inter', sans-serif;
    color: #000;
  }

  .name {
    font: 500 1, 12rem 'Inter', sans-serif;
    color: red;
  }
`;

export const ImageCard = styled.img`
  width: 18rem;
  height: 8.25rem;
`;

export const ContentBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.5rem;
  height: 3, 5rem;
  border-color: var(--gray-400);
  background-color: var(--white);
  border: 1px solid #ebebf0;
  box-sizing: border-box;
  gap: 2rem;

  #h1 {
    font: 500, 5px 'Inter', sans-serif;
    padding: 1.06rem;
  }
  #p {
    font: 500, 1.75rem 'Archivo', sans-serif;
    padding: 0.75rem;
  }
  .colorIcon {
    color: #000;
  }
`;

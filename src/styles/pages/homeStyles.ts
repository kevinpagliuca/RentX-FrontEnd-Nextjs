import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;
  height: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.438rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray-300);

  h1 {
    font-family: "Archivo", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.438rem;
    color: var(--gray-500);
  }

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.188rem;
    text-align: right;
    color: var(--gray-400);
  }
  
  @media (max-width: 768px) {
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;

   h1{
     margin-bottom:1rem;
   }

   p{
     margin-bottom: 1rem;
   }
  }
`;

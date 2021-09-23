import styled from "styled-components";

export const Container = styled.div`
  font-family: "Archivo", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-height: 100vh;
  background: var(--gray-50);
`;

export const Header = styled.header`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5.125rem;
  padding: 0 0 1.5rem 0;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-500);
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;

  svg {
    cursor: pointer;
    color: var(--gray-500);
    transition: all 0.3s linear;

    &:hover {
      filter: drop-shadow(10px 0px 0px var(--gray-500));
    }
  }

  div.titleName {
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 0.938rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 2.438rem;
    }
  }

  div.titleValue {
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 0.938rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 2.438rem;

      &.titleValueRed{
        color: var(--main);
      }
    }
  }

  @media (max-width: 1360px) {
    width: 50%;
    div {
      p {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 1021px) {
    width: 70%;
  }

  @media (max-width: 798px) {
    width: 80%;
  }

  @media (max-width: 517px) {
    width: 90%;
    div {
      p {
        font-size: 0.5rem;
      }
    }

    div {
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 650px 1fr;
  gap: 6rem;
  margin-top: 2.5rem;
`;

export const Aside = styled.aside`
    padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;


  .buttonRent {
    margin-top:7rem;
  }
`;


export const ContentText = styled.div`
height: 7.625rem;


p{
  color: var(--gray-400);
  padding: 2rem 0rem 0.5rem 0rem;
  font-family: "Inter", sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: left;

}
`;

export const NavigationContainer = styled.div `
margin-top: 3rem;

display: flex;
align-items: center;
justify-content: center;
width: 100%;
border-bottom: 1px solid var(--gray-300);
gap: 0rem;
height: 2.5rem;



button {
  font: 400 1.25rem "Archivo", sans-serif;
  transition: all 0.3s;
  color: var(--gray-350);
  height: 100%;
  white-space: nowrap;
 width: 100%;


  &.active {
    font: 600 1.25rem "Archivo", sans-serif;
    color: var(--gray-450);
    height: 100%;
    border-bottom: 2px solid var(--main);
  }
}`;

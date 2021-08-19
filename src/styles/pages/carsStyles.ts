import styled from 'styled-components';

export const Container = styled.div`
font-family: "Archivo", sans-serif;
 display: flex;
 flex-direction: column;
 width:100%;
 height: calc(100vh - 6rem);
 background: var(--gray-50);
`;

export const Header = styled.header`
margin-top: 1rem;
 display: flex;
 flex-direction: column;
 width:100%;
 height: 5.125rem;
 padding: 0 0 1.5rem 0;
 color: var(--gray-500);
 border-bottom: 1px solid var(--gray-500);
`;

export const HeaderContent = styled.header`
 display: flex;
 align-items: center;
 justify-content:space-between;
 width:40%;
 height: 100%;

 div{
   svg{
    cursor: pointer;

     &:hover{
      filter: drop-shadow(0.8);
     }
   }
 }

 div{
   p{
 
font-style: normal;
font-weight: 500;
font-size: 0.875rem;
line-height:0.938rem;
letter-spacing: 0.04em;
text-transform: uppercase
   }

   h1{

font-style: normal;
font-weight: 600;
font-size: 2.25rem;
line-height:2.438rem;
   }
 }
 
 @media (max-width: 1360px) {
  width:50%;
div{
  p{
    font-size: 0.5rem;
  }
}
 
 }

 @media (max-width: 1021px) {
  width:70%;
 }

 @media (max-width: 798px) {
  width:80%;
 }

 @media (max-width: 517px) {
  width:90%;
  div{
  p{
    font-size: 0.5rem;
  }
}

div{
  h1{
    font-size: 1.5rem;
  }
}
 }

 @media (max-width: 375px) {
  width:90%;
 }


`;


export const Content = styled.div`
 display: flex;
 width:100%;
 height: 100%;
`;

export const Main = styled.main`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 60%;
 height: 100%;
`;

export const Aside = styled.aside`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 40%;
 height: 100%;
`;

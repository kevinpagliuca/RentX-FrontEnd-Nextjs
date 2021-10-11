import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 24rem;
  max-width: 24rem;
  width: 100%;

  h1 {
    font: 600 2.25rem 'Archivo', sans-serif;
    color: var(--gray-450);
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 18.75rem;
    font: 400 1rem 'Inter', sans-serif;
    color: var(--gray-400);
    margin-bottom: 2.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    #passwordIcon {
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        color: var(--main);
      }
    }

    a.forgetPassTxt {
      font: 400 1rem 'Inter', sans-serif;
      color: var(--gray-400);
      margin: 1rem 0;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: var(--main);
        text-decoration: underline;
      }
    }

    .loginBtn {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;

    h1 {
      max-width: 12rem;
    }

    p {
      max-width: 14.5rem;
    }
  }
`;

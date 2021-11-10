import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 2rem;
  width: 100%;
  background: var(--white);
  border: 1px solid var(--gray-100);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.125);
  border-radius: 2px;
`;

export const CarInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-right: 2rem;

  h1 {
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'Archivo', sans-serif;
    color: var(--gray-350);
  }

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Archivo', sans-serif;
    color: var(--gray-500);

    &.red {
      color: var(--main);
    }
  }

  .iconType {
    position: absolute;
    right: 0;
    color: var(--gray-350);
  }
`;

export const CarImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  max-height: 10rem;
  flex: 1;
  position: relative;
`;

export const FooterContet = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid var(--gray-100);
  border-radius: 2px;
  margin-top: 0.5rem;
  background: var(--white);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.125);
  padding: 1.325rem 2rem;

  h1 {
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'Archivo', sans-serif;
    color: var(--gray-350);
  }

  div {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    span {
      font-size: 1.125rem;
      font-weight: 500;
      font-family: 'Archivo', sans-serif;
      color: var(--gray-500);
    }

    svg {
      color: var(--gray-350);
    }
  }
`;

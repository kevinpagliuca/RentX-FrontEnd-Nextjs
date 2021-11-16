import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto 2.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ChartContainer = styled.div`
  opacity: 0.15;
  width: 100%;
`;

export const CommingSoon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: 'Em breve, estamos trabalhando nisso!';
    font: 700 3rem 'Archivo', sans-serif;
    max-width: 500px;
    text-align: center;
    color: var(--main);
    /* background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25); */
    padding: 8rem;

    background: -webkit-linear-gradient(90deg, var(--gray-500), var(--main));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

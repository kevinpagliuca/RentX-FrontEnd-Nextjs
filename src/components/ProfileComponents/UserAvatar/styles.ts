import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;

  .userTxt span {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .userTxt img {
    box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.4);
    object-fit: contain;
  }

  span.photoIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main);
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.4);
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: var(--white);
  }
`;

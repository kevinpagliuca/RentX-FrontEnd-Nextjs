import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const Divisor = styled.hr`
  background: linear-gradient(
    180deg,
    transparent,
    var(--gray-300),
    transparent
  );
  width: 1px;
  position: absolute;
  right: 0;
  border: 0;
  top: 0;
  bottom: 0;
  opacity: 0.25;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  height: 3.5rem;
  border-radius: 0.5rem;
  width: 100%;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;

  &.active,
  &:hover {
    background: var(--gray-450);
    box-shadow: 2px 2px 8px var(--gray-450);

    span {
      background: linear-gradient(45deg, transparent, var(--main), transparent);
      box-shadow: 2px 2px 8px 0 rgba(220, 22, 55, 0.35),
        -2px -2px 8px 0 rgba(220, 22, 55, 0.35);
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    border-radius: 8px;
    width: 2.5rem;
    height: 2.5rem;
    transition: all 0.3s;
  }
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  height: 3.5rem;
  border-radius: 0.5rem;
  width: 100%;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: var(--main);
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    border-radius: 8px;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

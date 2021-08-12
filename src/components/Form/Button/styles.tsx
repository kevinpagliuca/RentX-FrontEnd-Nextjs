import styled, { css } from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 5rem;
`;

type ButtonComponentProps = {
  variant?: "blue" | "red" | "green";
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
font-family: "Inter", sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.125rem;
line-height:1.375rem;

  padding: 1.325px 5rem;
  background: var(--main);
  color: var(--white);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  transition: all 0.3s;

  /* ${(props) =>
    props.variant === "blue" &&
    css`
      background: var(--blue);
    `} */

  &:disabled {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }

  /* input:not([value=""]) ~ span {
    top: 4px;
  }  mesmo nivel*/

  &:not(:disabled):hover {
    background: ${darken(0.2, "#DC1637")};
  }
`;

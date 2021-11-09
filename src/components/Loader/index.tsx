import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  background: #1b1b1fbb;
  position: fixed;
  z-index: -1;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.open {
    z-index: 2000;
    opacity: 1;
    visibility: visible;
  }
`;

interface LoaderProps {
  open: boolean;
}

export const Loader = ({ open }: LoaderProps) => {
  return (
    <Container className={open ? 'open' : undefined}>
      <CircularProgress size={200} />
    </Container>
  );
};

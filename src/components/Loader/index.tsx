import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  background: #00000043;
  position: absolute;
  z-index: -1;
  inset: 5rem 0 0;
  width: 100%;
  height: 100%;
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

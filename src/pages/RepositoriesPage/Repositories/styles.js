import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1rf));
  grid-template-columns: auto auto auto;
  gap: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md} ){
    grid-template-columns: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg} ){
    grid-template-columns: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm} ){
    grid-template-columns: auto;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.size};
  height: 75vh;
`
export const Column = styled.div`
  width: 100%;
  height: max-content;
`
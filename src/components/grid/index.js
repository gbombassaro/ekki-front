import styled from 'styled-components';
import {grid} from 'styled-system';

export const Grid = styled.div`
  width: 100%;
  display: grid;
  ${grid};
`;
export const Item = styled.div`
  width: 100%;
  height: max-content;
`;
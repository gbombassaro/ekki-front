import styled from 'styled-components';
import {border, flexbox, layout, space} from 'styled-system';

const Box = styled.div`
  display: flex;
  ${border};
  ${flexbox};
  ${layout};
  ${space};
`

export default Box;
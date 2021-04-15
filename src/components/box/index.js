import styled from 'styled-components';
import {get} from 'lodash';
import {border, flexbox, layout, space} from 'styled-system';
import React from 'react';
import PropTypes from 'prop-types';

const getDisplay = props => {
  const disableFlex = get(props, 'disableFlex', false);
  if (disableFlex) return 'unset';
  return 'flex'
}

const Box = styled.div`
  display: ${getDisplay};
  ${border};
  ${flexbox};
  ${layout};
  ${space};
`;

Box.propTypes = {
  disableFlex: PropTypes.bool,
}

export default Box;
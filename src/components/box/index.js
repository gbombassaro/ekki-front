import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {border, flexbox, layout, space} from 'styled-system';

const getDisplay = props => {
  const disableFlex = get(props, 'disableFlex', false);
  if (disableFlex) return 'unset';
  return 'flex';
};

const Box = styled.div`
  display: ${getDisplay};
  ${border};
  ${flexbox};
  ${layout};
  ${space};
`;

Box.propTypes = {
  disableFlex: PropTypes.bool,
};

export default Box;
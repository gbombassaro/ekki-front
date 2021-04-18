import React from 'react';
import styled, {withTheme} from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  fill: ${props => props.theme.colors[props.color]};
`

const Warning = ({color, height, viewBox, width}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
  </Svg>
);

Warning.defaultProps = {
  color: 'secondary',
  height: '24px',
  viewBox: '0 0 24 24',
  width: '24px',
};

Warning.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

export default withTheme(Warning);
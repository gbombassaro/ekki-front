import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {ChartText as Text} from '../../components/typography';

const Rectangle = styled.rect`
  fill: ${props => props.theme.colors[props.fill]};
  stroke: ${props => props.theme.colors[props.stroke]};
`;

const BarDataVisualization = ({width, userData}) => {

  if (!width) return null;

  const {credit, creditLimit} = userData;
  const marginRight = 40;
  const textMargin = 4;
  const strokeWidth = 2;
  const barHeight = 20;
  const activeWidth = width - marginRight;
  const progressBar = 20 - strokeWidth;
  const halfBarHeight = 20 / 2 + strokeWidth;

  const xScaleRange = [0, activeWidth];
  const xScaleDomain = [0, 100];
  const xScale = d3.scaleLinear().range(xScaleRange).domain(xScaleDomain);

  const shareValue = credit * 100 / creditLimit;
  const value = xScale(shareValue);
  
  return (
    <svg width={width} height={barHeight}>
      <Rectangle fill='white' stroke='secondary' strokeWidth={strokeWidth} width={activeWidth} height={barHeight} />
      <Rectangle fill='secondary' stroke='secondary' x='1' y='1' width={value} height={progressBar} />
      <Text x={activeWidth + textMargin} y={halfBarHeight} dominantBaseline='middle'>{shareValue}%</Text>
    </svg>
  );
};

BarDataVisualization.propTypes = {
  width: PropTypes.number, 
  userData: PropTypes.object,
};

export default BarDataVisualization;
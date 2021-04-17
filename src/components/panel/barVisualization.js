import React from 'react'
import * as d3 from 'd3'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Rectangle = styled.rect`
  fill: ${props => props.theme.colors[props.fill]};
  stroke: ${props => props.theme.colors[props.stroke]};
`

const BarDataVisualization = ({width, height, userData}) => {

  const {credit, creditLimit} = userData;
  const xScaleRange = [0, width];
  const xScaleDomain = [0, 100];
  const xScale = d3.scaleLinear().range(xScaleRange).domain(xScaleDomain);

  const usedCreditShare = credit * 100 / creditLimit;
  const usedCredit = xScale(usedCreditShare)
  
  return (
    <svg width={width} height={height}>
      <Rectangle fill='white' stroke='secondary' x='0' y='0' width={width} height='20' strokeWidth='2' />
      <Rectangle fill='secondary' stroke='secondary' x='0' y='0' width={usedCredit} height='18'/>
    </svg>
  )
}

BarDataVisualization.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  userData: PropTypes.object,
}

export default BarDataVisualization;
import React from 'react';
import WidthProvider from '../widthProvider';
import BarVisualization from './barVisualization';
import PropTypes from 'prop-types';

const CreditVisualization = ({userData}) => {
  return (
    <WidthProvider>
      <BarVisualization userData={userData} height={100} />
    </WidthProvider>
  )
}

CreditVisualization.propTypes = {
  userData: PropTypes.object
}

export default CreditVisualization;
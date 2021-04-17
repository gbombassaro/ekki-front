import React from 'react';
import WidthProvider from '../../components/widthProvider';
import BarVisualization from './barVisualization';
import PropTypes from 'prop-types';

const CreditVisualization = ({userData}) => {
  return (
    <WidthProvider>
      <BarVisualization userData={userData} />
    </WidthProvider>
  )
}

CreditVisualization.propTypes = {
  userData: PropTypes.object
}

export default CreditVisualization;
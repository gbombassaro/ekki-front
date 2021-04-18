import PropTypes from 'prop-types';
import React from 'react';

import WarningIcon from '../../assets/warning';
import Box from '../box';
import {Text} from '../typography';

const Warning = ({message}) => {
  return (
    <Box
      width='calc(100% - 16px)'
      alignItems='center'
      border='2px solid'
      borderColor='warning'
      paddingLeft={2}
      paddingRight={2}
    >
      <WarningIcon color='warning' />
      <Text color='warning'>{message}</Text>
    </Box>
  );
};

Warning.propTypes = {
  message: PropTypes.string.isRequired
};

export default Warning;
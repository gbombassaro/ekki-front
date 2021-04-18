import React from 'react';
import Box from '../box';
import WarningIcon from '../../assets/warning';
import {Text} from '../typography';
import PropTypes from 'prop-types';

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
  )
}

Warning.propTypes = {
  message: PropTypes.string.isRequired
};

export default Warning;
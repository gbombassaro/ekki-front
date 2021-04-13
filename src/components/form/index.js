import {map} from 'lodash';
import React from 'react';
import Box from '../box';
import Button from '../button';
import Input from '../input';
import PropTypes from 'prop-types';

const Form = props => {

  const {
    data,
    primaryButtonAction,
    primaryButtonText,
    secondaryButtonAction,
    secondaryButtonText,
    title
  } = props;

  return (
    <Box width='100%' flexDirection='column' maxWidth={600}>
      <h3>{title}</h3>
      <Box width='100%'>
        {map(data, entry => <Input key={entry.id} {...entry} value={entry.value} onChange={entry.onChange} />)}
      </Box>
      <Box width='100%' justifyContent='space-between' marginTop={3}>
        {secondaryButtonAction && <Button onClick={secondaryButtonAction}>{secondaryButtonText}</Button>}
        {primaryButtonAction && <Button onClick={primaryButtonAction} hasIcon>{primaryButtonText}</Button>}
      </Box>
    </Box>
  )
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
  primaryButtonAction: PropTypes.func,
  primaryButtonText: PropTypes.string,
  secondaryButtonAction: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  title: PropTypes.string,
}

export default Form;
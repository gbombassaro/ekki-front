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
    disablePrimaryButton,
    secondaryButtonAction,
    secondaryButtonText,
    disableSecondaryButton,
    title
  } = props;

  return (
    <Box width='100%' flexDirection='column' maxWidth={600}>
      <h3>{title}</h3>
      <Box width='100%' flexDirection='column'>
        {map(data, entry => <Input key={entry.id} {...entry} value={entry.value} onChange={entry.onChange} />)}
      </Box>
      <Box width='100%' justifyContent={secondaryButtonAction ? 'space-between' : 'flex-end'} marginTop={3}>
        {secondaryButtonAction && <Button disabled={disableSecondaryButton} onClick={secondaryButtonAction}>{secondaryButtonText}</Button>}
        {primaryButtonAction && <Button disabled={disablePrimaryButton} onClick={primaryButtonAction} hasIcon>{primaryButtonText}</Button>}
      </Box>
    </Box>
  )
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
  primaryButtonAction: PropTypes.func,
  primaryButtonText: PropTypes.string,
  disablePrimaryButton: PropTypes.bool,
  secondaryButtonAction: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  disableSecondaryButton: PropTypes.bool,
  title: PropTypes.string,
}

export default Form;
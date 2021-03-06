import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

import Box from '../box';
import Button from '../button';
import Input from '../input';
import {MediumTitle, Text} from '../typography';

const Form = props => {

  const {
    data,
    primaryButtonAction,
    primaryButtonText,
    disablePrimaryButton,
    secondaryButtonAction,
    secondaryButtonText,
    disableSecondaryButton,
    title,
    successData,
  } = props;

  if (successData.message) return (
    <Box width='100%' flexDirection='column' alignItems='center'>
      <Text>{successData.message}</Text>
      <Link to={successData.path}>
        <Button hasIcon>{successData.buttonMessage}</Button>
      </Link>
    </Box>
  );

  return (
    <Box width='100%' flexDirection='column' maxWidth={600}>
      <MediumTitle>{title}</MediumTitle>
      <Box width='100%' flexDirection='column'>
        {map(data, entry => (
          <Input key={entry.id} {...entry} value={entry.value} onChange={entry.onChange} />
        ))}
      </Box>
      <Box width='100%' justifyContent={secondaryButtonAction ? 'space-between' : 'flex-end'} marginTop={3}>
        {secondaryButtonAction && (
          <Button disabled={disableSecondaryButton} onClick={secondaryButtonAction}>{secondaryButtonText}</Button>
        )}
        {primaryButtonAction && (
          <Button disabled={disablePrimaryButton} onClick={primaryButtonAction} hasIcon>{primaryButtonText}</Button>
        )}
      </Box>
    </Box>
  );
};

Form.propTypes = {
  data: PropTypes.array.isRequired,
  primaryButtonAction: PropTypes.func,
  primaryButtonText: PropTypes.string,
  disablePrimaryButton: PropTypes.bool,
  secondaryButtonAction: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  disableSecondaryButton: PropTypes.bool,
  title: PropTypes.string,
  successData: PropTypes.shape({
    message: PropTypes.string,
    buttonMessage: PropTypes.string,
    path: PropTypes.string
  })
};

export default Form;
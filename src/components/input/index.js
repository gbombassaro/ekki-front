import React from 'react';
import styled from 'styled-components';

import Box from '../box';
import {Label} from '../typography';

const StyledInput = styled.input`
  width: calc(100% - 26px);
  height: 45px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 18px;
  color: ${props => props.theme.colors.secondary};
  border-color: ${props => props.theme.colors.secondary};
  border-radius: 0px;
  border-style: solid;
  &:focus {
    outline: unset;
    box-shadow: 0 0 0 1px ${props => props.theme.colors.secondary};
  }
`;

const Input = props => {

  const {onChange, label} = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Box flexDirection='column' marginTop={1} marginBottom={1} width='100%'>
      <Label>{label}</Label>
      <StyledInput {...props} onChange={handleChange} />
    </Box>
  );
};

export default Input;
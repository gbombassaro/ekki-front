import React from 'react';
import styled from 'styled-components';
import Box from '../box';

const StyledInput = styled.input`
  width: calc(100% - 26px);
  height: 45px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 18px;
  color: ${props => props.theme.colors.secondary};
  border-color: ${props => props.theme.colors.secondary};
  border-radius: 0px;
  &:focus {
    outline: unset;
  }
`
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.secondary};
`

const Input = props => {

  const {
    label,
    maxLength,
    type,
    onChange,
    value,
  } = props;

  const handleChange = event => {
    onChange(event.target.value);
  }

  return (
    <Box flexDirection='column' marginTop={1} marginBottom={1} width='100%'>
      <Label>{label}</Label>
      <StyledInput
        onChange={handleChange}
        type={type}
        maxLength={maxLength}
        value={value}
      />
    </Box>
  )
}

export default Input;
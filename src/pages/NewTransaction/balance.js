import React from 'react';
import Box from '../../components/box'

const Balance = ({balance, transactionValue}) => {
  let finalValue = balance - transactionValue;
  if (!transactionValue) finalValue = balance;
  return (
    <Box width='100%' justifyContent='space-between' marginTop={2} marginBottom={2}>
      <p>Disponível: {balance}</p>
      <p>Final: {finalValue}</p>
    </Box>
  )
}

export default Balance;
import React from 'react';

import Box from '../../components/box';
import {parseBalance} from '../../utils';
import {Text} from '../../components/typography'

const Balance = ({balance, transactionValue}) => {
  let finalValue = balance - transactionValue;
  if (!transactionValue) finalValue = balance;
  return (
    <Box width='100%' justifyContent='space-between' marginTop={2} marginBottom={2}>
      <Text>Disponível: {parseBalance(balance)}</Text>
      <Text>Final: {parseBalance(finalValue)}</Text>
    </Box>
  );
};

export default Balance;
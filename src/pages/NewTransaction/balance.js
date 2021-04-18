import React from 'react';

import Box from '../../components/box';
import {Text} from '../../components/typography';
import {parseBalance} from '../../utils';
import Warning from '../../components/warningMessage';
import PropTypes from 'prop-types';

const getAmountAvailable = (balance, availableCredit) => {
  if (balance < 0) return availableCredit;
  return balance + availableCredit;
};

const Balance = ({userData, transactionValue}) => {
  const {balance, credit, creditLimit} = userData;
  const availableCredit = creditLimit - credit;
  const totalAvailable = getAmountAvailable(balance, availableCredit);
  let finalValue = balance - transactionValue;
  let warningMessage = '';

  if (!transactionValue) finalValue = balance;
  if (finalValue < 0) warningMessage = 'Atenção! Você está usando seu limite de crédito.'

  return (
    <Box width='100%' flexDirection='column' marginTop={2} marginBottom={2}>
      <Box width='100%' justifyContent='space-between'>
        <Text>Disponível: {parseBalance(totalAvailable)}</Text>
        <Text>Final: {parseBalance(finalValue)}</Text>
      </Box>
      {warningMessage.length > 0 && <Warning message={warningMessage} />}
    </Box>
  );
};

Balance.propTypes = {
  userData: PropTypes.object.isRequired,
  transactionValue: PropTypes.number.isRequired
};

export default Balance;
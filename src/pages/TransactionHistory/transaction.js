import React from 'react';
import Box from '../../components/box';
import {parseBalance, completeDate} from '../../utils';

const Transaction = ({data}) => {
  const {id, value, status, processedAt} = data;
  const transactionDate = new Date(processedAt);
  return (
    <Box border='1px solid' borderColor='secondary' flexDirection='column' width='100%' marginTop={1} marginBottom={1}>
      <pre>{id}</pre>
      <pre>{parseBalance(value)}</pre>
      <pre>{status}</pre>
      <pre>{completeDate(transactionDate)}</pre>
    </Box>
  )
}

Transaction.defaultProps = {
  data: {}
}

export default Transaction;
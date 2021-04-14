import React from 'react';
import Box from '../../components/box';

const Transaction = props => {
  const {data} = props; 
  return (
    <Box border='1px solid' borderColor='secondary' width='100%' marginTop={1} marginBottom={1}>
      <pre>{data.id}</pre>
      <pre>{data.value}</pre>
      <pre>{data.status}</pre>
      <pre>{data.processedAt}</pre>
    </Box>
  )
}

export default Transaction;
import React from 'react';
import Header from '../../components/header';
import Transaction from './transaction';
import {map} from 'lodash';
import Section from '../../components/section';
import Box from '../../components/box';

const TransactionHistory = props => {

  const {data} = props;
  const {transactionHistory} = data;

  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar para a home',
      link: '/home',
    }
  ]

  return (
    <React.Fragment>
      <Header title='Histórico de transações' actionButtons={headerActionButtons} />
      <Section justifyContent='center'>
        <Box width='100%' maxWidth={600} flexDirection='column'>
          {map(transactionHistory, transaction => <Transaction key={transaction.id} data={transaction} /> )}
        </Box>
      </Section>
    </React.Fragment>
  )
}

export default TransactionHistory;
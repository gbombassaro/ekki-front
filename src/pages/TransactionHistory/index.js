import {map} from 'lodash';
import React from 'react';

import Box from '../../components/box';
import Header from '../../components/header';
import Section from '../../components/section';
import Transaction from './transaction';

const TransactionHistory = ({userData}) => {

  const {transactionHistory} = userData;

  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar para a home',
      link: '/home',
    }
  ];

  return (
    <React.Fragment>
      <Header title='Histórico de transações' actionButtons={headerActionButtons} />
      <Section justifyContent='center'>
        <Box width='100%' maxWidth={600} flexDirection='column'>
          {map(transactionHistory.reverse(), transaction => <Transaction key={transaction.id} data={transaction} /> )}
        </Box>
      </Section>
    </React.Fragment>
  );
};

export default TransactionHistory;
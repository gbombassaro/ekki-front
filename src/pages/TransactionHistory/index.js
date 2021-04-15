import {map} from 'lodash';
import React from 'react';

import Box from '../../components/box';
import Header from '../../components/header';
import Section from '../../components/section';
import Transaction from './transaction';

const TransactionHistory = ({userData}) => {

  const {transactionHistory} = userData;
  const isEmpty = transactionHistory.length < 1;

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
        <Box width='100%' maxWidth={600} flexDirection='column' alignItems={isEmpty ? 'center' : 'flex-start'}>
          {isEmpty ? (
            <p>Ops! Parece que você ainda não fez uma transação.</p>
          ) : (
            map(transactionHistory.reverse(), transaction => <Transaction key={transaction.id} data={transaction} />)
          )}
        </Box>
      </Section>
    </React.Fragment>
  );
};

export default TransactionHistory;
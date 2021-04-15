import React from 'react';

import Header from '../components/header';
import Panel from '../components/panel';

const Home = props => {

  const actionButtons = [
    {
      id: 'newtransaction',
      children: 'Transferir',
      link: '/transferir',
      hasIcon: true
    },
    {
      id: 'transactionHistory',
      children: 'Histórico de transações',
      link: '/historico-de-transacoes',
      hasIcon: true
    },
    {
      id: 'beneficiaries',
      children: 'Cadastrar novo favorecido',
      link: '/favorecidos',
      hasIcon: true
    },
  ];

  return (
    <React.Fragment>
      <Header title="Ekki" actionButtons={actionButtons} isHome/>
      <Panel {...props} />
    </React.Fragment>
  );
};

export default Home;
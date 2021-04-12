import React from 'react';
import Header from '../components/header';
import Panel from '../components/panel';

const Home = props => {

  // const handleClick = () => {
  //   props.getUsers();
  // }

  // const mostrarErro = () => {
  //   props.dispatch({
  //     type: 'notification',
  //     show: true,
  //     message: 'Ocorreu um erro ao carregar os dados.'
  //   });
  // }

  const actionButtons = [
    {
      id: 'beneficiaries',
      children: 'Favorecidos',
      link: '/favorecidos',
      hasIcon: true
    },
    {
      id: 'transactionHistory',
      children: 'Histórico de transações',
      link: '/historico-de-transacoes',
      hasIcon: true
    },
    {
      id: 'newtransaction',
      children: 'Transferir',
      link: '/transferir',
      hasIcon: true
    },
  ]

  return (
    <React.Fragment>
      <Header title="Ekki" actionButtons={actionButtons} />
      <Panel />
    </React.Fragment>
  )
}

export default Home;
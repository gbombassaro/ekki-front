import React, {useState} from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import TransactionForm from '../../components/form';
import UserForm from '../../components/userList';
import {newTransaction} from './actions';

const NewTransaction = props => {
  const {data, dispatch, authenticatedUser} = props;
  const {beneficiaryList} = data;

  const [page, setPage] = useState(0);
  const [transactionDestiny, setTransactionDestiny] = useState({});
  const [transactionValue, setTransactionValue] = useState('');

  const transactionFormData = [
    {
      id: 'value',
      value: transactionValue,
      onChange: setTransactionValue,
    }
  ]
  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar para a home',
      link: '/home',
    }
  ]

  const handleDestinySelection = data => {
    setTransactionDestiny(data);
    setPage(1);
  }

  const executeTransaction = () => {
    newTransaction({ origin: authenticatedUser.id, destiny: transactionDestiny.id, value: transactionValue })
    .then(() => {
      dispatch({type: 'notification', show: true, message: 'Transação realizada com sucesso.'})
    })
    .catch(payload => {
      const error = JSON.parse(payload.request.response);
      dispatch({type: 'notification', show: true, message: error.message})
    });
  }

  return (
    <React.Fragment>
      <Header title='Transferir' actionButtons={headerActionButtons} />
      {page === 0 &&
        <Section justifyContent='center'>
          <UserForm
            data={beneficiaryList}
            onClick={handleDestinySelection}
            title='Para quem será a transferência?'
            primaryInformation='name'
            secondaryInformation='cpf'
          />
        </Section>
      }
      {page === 1 &&
        <Section justifyContent='center'>
          <TransactionForm
            data={transactionFormData}
            primaryButtonAction={executeTransaction}
            secondaryButtonAction={() => setPage(0)}
            title='Qual o valor?'
            primaryButtonText='Transferir'
            secondaryButtonText='Voltar'
          />
        </Section>
      }
    </React.Fragment>
  )
}

export default NewTransaction;
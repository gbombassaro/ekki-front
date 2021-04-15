import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import TransactionForm from '../../components/form';
import UserForm from '../../components/userList';
import Box from '../../components/box';
import Balance from './balance';
import {newTransaction} from './actions';

const NewTransaction = props => {
  const {userData, dispatch} = props;
  const {_id, balance, beneficiaryList} = userData;

  const [page, setPage] = useState(0);
  const [transactionDestiny, setTransactionDestiny] = useState({});
  const [transactionValue, setTransactionValue] = useState(0);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (!transactionValue) setValidation(false);
    else setValidation(true);
  }, [transactionValue]);

  const handleDestinySelection = data => {
    setTransactionDestiny(data.entry);
    setPage(1);
  }

  const executeTransaction = () => {
    newTransaction({ 
      origin: _id,
      destiny: transactionDestiny.id,
      value: transactionValue
    })
    .then(() => {
      dispatch({type: 'NOTIFICATION/SHOW', message: 'Transação realizada com sucesso.'});
    })
    .catch(payload => {
      const error = JSON.parse(payload.request.response);
      dispatch({type: 'NOTIFICATION/SHOW', message: error.message});
    });
  }

  const transactionFormData = [
    {
      id: 'value',
      value: transactionValue,
      onChange: setTransactionValue,
      type: 'number',
    }
  ]
  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar para a home',
      link: '/home',
    }
  ]

  return (
    <React.Fragment>
      <Header title='Transferir' actionButtons={headerActionButtons} />
      {page === 0 &&
        <Section padding='32px' justifyContent={['flex-start', 'center']}>
          <UserForm
            title='Para quem será a transferência?'
            data={beneficiaryList}
            onClick={handleDestinySelection}
            primaryInformation='name'
            secondaryInformation='cpf'
          />
        </Section>
      }
      {page === 1 &&
        <Section padding='32px' justifyContent='center'>
          <Box width='100%' maxWidth={600} flexDirection='column'>
            <Balance
              balance={balance}
              transactionValue={transactionValue}
            />
            <TransactionForm
              title='Qual o valor?'
              data={transactionFormData}
              primaryButtonAction={executeTransaction}
              secondaryButtonAction={() => setPage(0)}
              primaryButtonText='Transferir'
              secondaryButtonText='Voltar'
              disablePrimaryButton={!validation}
            />
          </Box>
        </Section>
      }
    </React.Fragment>
  )
}

export default NewTransaction;
import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import TransactionForm from '../../components/form';
import UserList from '../../components/userList';
import Box from '../../components/box';
import Balance from './balance';
import {newTransaction} from './actions';
import {toNumber} from '../../utils';

const NewTransaction = ({userData, dispatch, updateData}) => {
  const {_id, balance, beneficiaryList} = userData;
  const [page, setPage] = useState(0);
  const [transactionDestiny, setTransactionDestiny] = useState({});
  const [transactionValue, setTransactionValue] = useState(0);
  const [validation, setValidation] = useState(false);
  const [formStatus, setFormStatus] = useState({});
  const showBalance = !formStatus.message;

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
      setFormStatus({
        message: 'Transação realizada com sucesso.',
        buttonMessage: 'Ir para a home',
        path: '/home'
      })
      updateData(dispatch);
    })
    .catch(payload => {
      const error = JSON.parse(payload.request.response);
      dispatch({type: 'NOTIFICATION/SHOW', message: error.message});
    });
  }

  const handleTransactionValue = value => {
    return setTransactionValue(toNumber(value))
  }

  const transactionFormData = [
    {
      id: 'value',
      value: transactionValue,
      onChange: handleTransactionValue,
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
          <UserList
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
            {showBalance && (
              <Balance
                balance={balance}
                transactionValue={transactionValue}
              />
            )}
            <TransactionForm
              title='Qual o valor?'
              data={transactionFormData}
              primaryButtonAction={executeTransaction}
              secondaryButtonAction={() => setPage(0)}
              primaryButtonText='Transferir'
              secondaryButtonText='Voltar'
              disablePrimaryButton={!validation}
              successData={formStatus}
            />
          </Box>
        </Section>
      }
    </React.Fragment>
  )
}

export default NewTransaction;
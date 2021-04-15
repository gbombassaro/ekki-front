import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import BeneficiaryForm from '../../components/form';
import {newUser} from './actions';

const NewUser = ({dispatch, loadData}) => {

  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (!name || !cpf || !phone) setValidation(false);
    else setValidation(true);
  }, [name, cpf, phone]);

  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar para a home',
      link: '/home',
    }
  ]

  const beneficiaryFormData = [
    {
      id: 'name',
      label: 'Nome',
      value: name,
      onChange: setName,
    },
    {
      id: 'cpf',
      label: 'CPF',
      value: cpf,
      onChange: setCpf,
      maxLength: 11
    },
    {
      id: 'phone',
      label: 'Telefone',
      value: phone,
      onChange: setPhone,
      maxLength: 11
    }
  ]

  const handleClick = () => {
    newUser({
      name,
      cpf,
      phone
    })
    .then(() => {
      dispatch({type: 'NOTIFICATION/SHOW', message: 'usuário criado com sucesso'});
      loadData(dispatch);
    })
    .catch(payload => {
      const error = JSON.parse(payload.request.response);
      dispatch({type: 'NOTIFICATION/SHOW', message: error.message});
    })
  }

  return (
    <React.Fragment>
      <Header title='Abrir conta' actionButtons={headerActionButtons} />
      <Section padding='32px' justifyContent='center'>
        <BeneficiaryForm
          data={beneficiaryFormData}
          title='Insira os seus dados'
          primaryButtonText='Abrir Conta'
          primaryButtonAction={handleClick}
          disablePrimaryButton={!validation}
        />
      </Section>
    </React.Fragment>
  )
}

export default NewUser;
import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import BeneficiaryForm from '../../components/form';
import {newUser, newBeneficiary} from './actions';

const NewBeneficiary = props => {

  const {authenticatedUser, dispatch} = props;
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (!name || !cpf || !phone) setValidation(false);
    else setValidation(true)
  }, [name, cpf, phone])

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
    newUser({name, cpf, phone, creditLimit: 500})
      .then(response => newBeneficiary({originId: authenticatedUser, beneficiaryId: response._id}))
      .catch(payload => {
        const error = JSON.parse(payload.request.response);
        dispatch({type: 'notification', show: true, message: error.message})
      })
  }

  return (
    <React.Fragment>
      <Header title='Novo favorecido' actionButtons={headerActionButtons} />
      <Section justifyContent='center'>
        <BeneficiaryForm
          title='Insira os dados do favorecido'
          data={beneficiaryFormData}
          primaryButtonText='Cadastrar'
          primaryButtonAction={handleClick}
          disablePrimaryButton={!validation}
        />
      </Section>
    </React.Fragment>
  )
}

export default NewBeneficiary;
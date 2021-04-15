import React, {useState, useEffect} from 'react';

import NewUserForm from '../../components/form';
import Header from '../../components/header';
import Section from '../../components/section';
import {newUser} from './actions';

const NewUser = ({dispatch, loadData}) => {

  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState(false);
  const [formStatus, setFormStatus] = useState({});

  useEffect(() => {
    if (!name || !cpf || cpf.length < 11 || !phone || phone.length < 11) setValidation(false);
    else setValidation(true);
  }, [name, cpf, phone]);

  const handleClick = () => {
    newUser({name, cpf, phone})
      .then(() => {
        setFormStatus({
          message: 'Abertura de conta realizada com sucesso.',
          buttonMessage: 'Voltar para página inicial',
          path: '/'
        });
        loadData(dispatch);
      })
      .catch(payload => {
        const error = JSON.parse(payload.request.response);
        dispatch({type: 'NOTIFICATION/SHOW', message: error.message});
      });
  };

  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar',
      link: '/',
    }
  ];

  const newUserFormData = [
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
  ];

  return (
    <React.Fragment>
      <Header title='Abrir conta' actionButtons={headerActionButtons} />
      <Section padding='32px' justifyContent='center'>
        <NewUserForm
          data={newUserFormData}
          title='Insira os seus dados'
          primaryButtonText='Abrir Conta'
          primaryButtonAction={handleClick}
          disablePrimaryButton={!validation}
          successData={formStatus}
        />
      </Section>
    </React.Fragment>
  );
};

export default NewUser;
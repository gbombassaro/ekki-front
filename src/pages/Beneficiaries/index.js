import React, {useState, useEffect} from 'react';

import FavoriteForm from '../../components/form';
import Header from '../../components/header';
import Section from '../../components/section';
import {newFavorite} from './actions';

const NewFavorite = ({dispatch, updateData}) => {

  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState(false);
  const [formStatus, setFormStatus] = useState({});

  useEffect(() => {
    if (!name || !cpf || !phone) setValidation(false);
    else setValidation(true);
  }, [name, cpf, phone]);

  const handleClick = () => {
    newFavorite({
      name,
      cpf,
      phone
    })
      .then(() => {
        setFormStatus({
          message: 'Favorecido cadastrado com sucesso.',
          buttonMessage: 'Ir para a home',
          path: '/home'
        });
        updateData(dispatch);
      })
      .catch(payload => {
        const error = JSON.parse(payload.request.response);
        dispatch({type: 'NOTIFICATION/SHOW', message: error.message});
      });
  };

  const headerActionButtons = [
    {
      id: 'goback',
      children: 'Voltar para a home',
      link: '/home',
    }
  ];

  const favoriteFormData = [
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
      <Header title='Novo favorecido' actionButtons={headerActionButtons} />
      <Section padding='32px' justifyContent='center'>
        <FavoriteForm
          data={favoriteFormData}
          title='Insira os dados do favorecido'
          primaryButtonText='Cadastrar'
          primaryButtonAction={handleClick}
          disablePrimaryButton={!validation}
          successData={formStatus}
        />
      </Section>
    </React.Fragment>
  );
};

export default NewFavorite;
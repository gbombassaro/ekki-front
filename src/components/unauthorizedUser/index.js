import React from 'react';

import Button from '../button';
import Section from '../section';
import {MediumTitle} from '../typography';

const UnauthorizedUser = () => {

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <Section width='100vw' height='100vh' flexDirection='column' alignItems='center' justifyContent='center'>
      <MediumTitle>Ops! Parece que você não está logado.</MediumTitle>
      <Button hasIcon onClick={handleClick}>Ir para a tela de usuários</Button>
    </Section>
  );
};

export default UnauthorizedUser;
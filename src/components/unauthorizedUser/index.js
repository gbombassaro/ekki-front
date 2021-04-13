import React from 'react';
import Section from '../section';
import Button from '../button';

const UnauthorizedUser = () => {

  const handleClick = () => {
    window.location.href = '/';
  }

  return (
    <Section width='100vw' height='100vh' flexDirection='column' alignItems='center' justifyContent='center'>
      <h3>Ops! Parece que você não está logado.</h3>
      <Button hasIcon onClick={handleClick}>Ir para a tela de usuários</Button>
    </Section>
  )
}

export default UnauthorizedUser;
import React from 'react';
import styled from 'styled-components';
import {Container, Column} from '../components/grid';
import {Header} from '../components/header';
import Button from '../components/button';
import Box from '../components/box';
import {map} from 'lodash';

const Welcome = styled.div`
  height: calc(75vh - 64px);
  padding: 32px;
  border-width: 1px;
  border-style: solid;
`
const Account = styled.div`
  height: calc(37.5vh - 64px);
  padding: 32px;
  border-width: 1px;
  border-style: solid;
`
const Credit = styled.div`
  height: calc(37.5vh - 64px);
  padding: 32px;
  border-width: 1px;
  border-style: solid;
`

const Home = props => {

  const handleClick = () => {
    props.getUsers();
  }

  const mostrarErro = () => {
    props.dispatch({
      type: 'notification',
      show: true,
      message: 'Ocorreu um erro ao carregar os dados.'
    });
  }

  const topMenu = [
    {
      id: 'update',
      children: 'Atualizar',
      onClick: handleClick,
      hasIcon: true
    },
    {
      id: 'error',
      children: 'Mostrar erro',
      onClick: mostrarErro,
      hasIcon: true
    },
  ]

  return (
    <React.Fragment>

      <Header title="Ekki">
        <Box flexDirection='column'>
          {map(topMenu, item => (
            <Box key={item.id} marginTop={1} marginBottom={1}>
              <Button {...item} />
            </Box>
          ))}
        </Box>
      </Header>

      <Container size="50vw 50vw">
        <Column>
          <Welcome>
            welcome
          </Welcome>
        </Column>
        <Column>
          <Account>
            Conta
          </Account>
          <Credit>
            teste
          </Credit>
        </Column>
      </Container>
    </React.Fragment>
  )
}

export default Home;
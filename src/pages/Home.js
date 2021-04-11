import React from 'react';
import styled from 'styled-components';
import {Container, Column} from '../components/grid';
import {Header} from '../components/header';

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

  return (
    <React.Fragment>

      <Header title="Ekki">
        seção 1
        <button onClick={handleClick}>atualizar</button>
        <button onClick={mostrarErro}>mostrar erro</button>
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
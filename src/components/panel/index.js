import React from 'react'
import styled from 'styled-components'
import {Container, Column} from '../grid'

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

const Panel = props => {
  return (
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
  )
}

export default Panel;
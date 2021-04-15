import React from 'react'
import {Grid, Item} from '../grid'
import Box from '../box'
import {parseName, parseBalance} from '../../utils'
import Button from '../button';
import {Link} from 'react-router-dom';

const Panel = ({userData}) => {

  const {name, balance, credit, creditLimit} = userData;

  const boxWidth = ['calc(100% - 50px)', 'calc(100% - 66px)'];
  const boxPadding = ['24px', '32px']

  const Welcome = () => (
    <Box
      width={boxWidth}
      height='calc(75vh - 66px)'
      padding={boxPadding}
      border='1px solid'
      borderColor='secondary'
      flexDirection='column'
    >
      <p>Seja bem vindo, {parseName(name)}</p>
      <Link to='/'>
        <Button>Voltar</Button>
      </Link>
    </Box>
  )

  const BalanceInformation = () => (
    <Box
      width={boxWidth}
      height='calc(37.5vh - 66px)'
      padding={boxPadding}
      border='1px solid'
      borderColor='secondary'
    >
      {parseBalance(balance)}
    </Box>
  )

  const CreditInformation = () => (
    <Box
      width={boxWidth}
      height='calc(37.5vh - 66px)'
      padding={boxPadding}
      border='1px solid'
      borderColor='secondary'
    >
      Seu limite é de {parseBalance(creditLimit)}
      você utilizou {parseBalance(credit)}
    </Box>
  )

  return (
    <Grid gridTemplateColumns={['100vw', '50vw 50vw']}>
      <Item>
        <Welcome/>
      </Item>
      <Item>
        <BalanceInformation/>
        <CreditInformation/>
      </Item>
    </Grid>
  )
}

export default Panel;
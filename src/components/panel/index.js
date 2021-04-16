import React from 'react';
import {Link} from 'react-router-dom';

import {parseName, parseBalance} from '../../utils';
import Box from '../box';
import Button from '../button';
import {Grid, Item} from '../grid';
import {SmallTitle} from '../typography';

const Panel = ({userData}) => {

  const {name, balance, credit, creditLimit} = userData;

  const boxStyledProps = {
    width: ['calc(100% - 50px)', 'calc(100% - 66px)'],
    padding: ['24px', '32px'],
    border: '1px solid',
    borderColor: 'secondary',
    flexDirection: 'column',
  }
  
  const Welcome = () => (
    <Box {...boxStyledProps} height='calc(75vh - 66px)'>
      <SmallTitle fontSize={['32px', '40px']}>Seja bem vindo, {parseName(name)}</SmallTitle>
      <Link to='/'>
        <Button>Voltar</Button>
      </Link>
    </Box>
  );

  const BalanceInformation = () => (
    <Box {...boxStyledProps} height='calc(37.5vh - 66px)'>
      <SmallTitle>Saldo disponível</SmallTitle>
      {parseBalance(balance)}
    </Box>
  );

  const CreditInformation = () => (
    <Box {...boxStyledProps} height='calc(37.5vh - 66px)'>
      <SmallTitle>Seu limite é de</SmallTitle>
      {parseBalance(creditLimit)}
      <SmallTitle>você utilizou</SmallTitle>
      {parseBalance(credit)}
    </Box>
  );

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
  );
};

export default Panel;
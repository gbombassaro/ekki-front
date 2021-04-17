import React from 'react';
import {Link} from 'react-router-dom';

import {parseName, parseBalance} from '../../utils';
import Box from '../../components/box';
import Button from '../../components/button';
import {Grid, Item} from '../../components/grid';
import {SmallTitle} from '../../components/typography';
import CreditVisualization from './creditVisualization';

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
      <Box justifyContent='space-between' marginBottom={4}>
        <Box flexDirection='column' alignItems='flex-start'>
          <SmallTitle>você utilizou</SmallTitle>
          {parseBalance(credit)}
        </Box>
        <Box flexDirection='column' alignItems='flex-end'>
          <SmallTitle>Seu limite é de</SmallTitle>
          {parseBalance(creditLimit)}
        </Box>
      </Box>
      <CreditVisualization userData={userData} />
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
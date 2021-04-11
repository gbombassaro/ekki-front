import React from 'react';
import Box from '../box';
import {ArrowForward} from '@material-ui/icons';
import styled from 'styled-components';
import {get} from 'lodash';

const Container = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`

const User = props => {
  const data = get(props, 'data');
  return (
    <Container
      width={['calc(100% - 48px)', '400px', '600px']}
      height={60}
      alignItems='center'
      justifyContent='space-between'
      paddingLeft={24}
      paddingRight={24}
      marginTop={1}
      marginBottom={1}
      border='1px solid'
      borderColor='secondary'
    >
      <p>{data.name}</p>
      <Box alignItems='center'>
        <p>{data.balance}</p>
        <ArrowForward/>
      </Box> 
    </Container>
  )
}

export default User;
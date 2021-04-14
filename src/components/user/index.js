import React from 'react';
import Box from '../box';
import arrowForwardIcon from '../../assets/arrow-forward.svg';
import styled from 'styled-components';

const Container = styled(Box)`
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px black;
  }
  &:active {
    box-shadow: unset;
  }
`

const User = ({altId, primaryInformation, secondaryInformation, onClick}) => {

  const handleClick = () => {
    onClick(altId);
  };

  return (
    <Container
      width={['calc(100% - 48px)', '400px', '550px']}
      height={60}
      alignItems='center'
      justifyContent='space-between'
      paddingLeft={24}
      paddingRight={24}
      marginTop={1}
      marginBottom={1}
      border='1px solid'
      borderColor='secondary'
      onClick={handleClick}
    >
      <p>{primaryInformation}</p>
      <Box alignItems='center'>
        {secondaryInformation && <p>{secondaryInformation}</p>}
        <img src={arrowForwardIcon} />
      </Box> 
    </Container>
  )
}

export default User;
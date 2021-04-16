import React from 'react';
import styled from 'styled-components';

import arrowForwardIcon from '../../assets/arrow-forward.svg';
import Box from '../box';
import {Text} from '../typography';

const Container = styled(Box)`
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px ${props => props.theme.colors.secondary};
  }
  &:active {
    box-shadow: unset;
  }
`;

const User = ({altId, primaryInformation, secondaryInformation, onClick}) => {

  const handleClick = () => {
    onClick(altId);
  };

  return (
    <Container
      width='calc(100% - 48px)'
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
      <Text>{primaryInformation}</Text>
      <Box alignItems='center'>
        {secondaryInformation && <Text>{secondaryInformation}</Text>}
        <img src={arrowForwardIcon} />
      </Box> 
    </Container>
  );
};

export default User;
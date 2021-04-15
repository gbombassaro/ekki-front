import {map} from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Section from '../components/section';
import User from '../components/user';
import Box from '../components/box';
import {parseBalance} from '../utils';
import Button from '../components/button';

const SelectUser = ({dispatch, usersList}) => {

  const dispatchSelectedUser = id => {
    const selectedUser = usersList[id];
    localStorage.setItem('authenticatedUser', selectedUser._id);
    dispatch({type: 'USER/SET_AUTH_USER', data: selectedUser});
    dispatch({type: 'NOTIFICATION/SHOW', message: `Usuário ${selectedUser.name} autenticado`});
  };

  return (
    <Section 
      height='calc(100vh - 48px)'
      padding='24px'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      color='secondary'
    >
      <Box disableFlex width='100%' maxWidth={600}>
        <Box width='100%' justifyContent='flex-end' marginBottom={4}>
          <Link to='/novo-usuario'>
            <Button hasIcon>Abrir nova conta</Button>
          </Link>
        </Box>
        {map(usersList, (user, key) => (
          <Link to='/home' key={user._id}>
            <User
              altId={key}
              primaryInformation={user.name}
              secondaryInformation={parseBalance(user.balance)}
              onClick={dispatchSelectedUser}
            />
          </Link>
        ))}
      </Box>
    </Section>
  );
};

SelectUser.propTypes = {
  dispatch: PropTypes.func,
  usersList: PropTypes.array
}

export default SelectUser;
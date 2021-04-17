import {map, orderBy} from 'lodash';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import Box from '../components/box';
import Button from '../components/button';
import Section from '../components/section';
import User from '../components/user';
import {parseBalance} from '../utils';

const SelectUser = ({dispatch, loadUsers,  usersList}) => {

  useEffect(() => {
    loadUsers(dispatch);
  }, []);

  const orderedUsersList = orderBy(usersList, 'createdAt', 'desc');

  const dispatchSelectedUser = id => {
    const selectedUser = orderedUsersList[id];
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
        {map(orderedUsersList, (user, key) => (
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
};

export default SelectUser;
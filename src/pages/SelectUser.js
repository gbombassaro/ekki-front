import {map} from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';

import Section from '../components/section';
import User from '../components/user';
import {parseBalance} from '../utils';

const SelectUser = ({dispatch, usersList}) => {

  const dispatchSelectedUser = id => {
    const selectedUser = usersList[id];
    dispatch({type: 'USER/SET_AUTH_USER', data: selectedUser});
    localStorage.setItem('authenticatedUser', selectedUser._id);
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
    </Section>
  );
};

export default SelectUser;
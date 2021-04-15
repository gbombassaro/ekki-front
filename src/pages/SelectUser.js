import {map} from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Section from '../components/section';
import User from '../components/user';
import Box from '../components/box';
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
        <Box disableFlex width='100%' maxWidth={600}>
          <Link to='/home' key={user._id}>
            <User
              altId={key}
              primaryInformation={user.name}
              secondaryInformation={parseBalance(user.balance)}
              onClick={dispatchSelectedUser}
              />
          </Link>
        </Box>
      ))}
    </Section>
  );
};

SelectUser.propTypes = {
  dispatch: PropTypes.func,
  usersList: PropTypes.array
}

export default SelectUser;
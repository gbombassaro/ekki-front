import React from 'react';
import Section from '../components/section';
import User from '../components/user';
import {Link} from 'react-router-dom'
import {map} from 'lodash';
import {parseBalance} from '../utils'

const SelectUser = props => {
  const {usersList} = props;

  const dispatchSelectedUser = id => {
    props.dispatch({type: 'auth', userData: usersList[id]})
  }

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
          <User altId={key} primaryInformation={user.name} secondaryInformation={parseBalance(user.balance)} onClick={dispatchSelectedUser} /> 
        </Link>
      ))}
    </Section>
  )
}

export default SelectUser;
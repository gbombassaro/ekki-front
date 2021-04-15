import React, {createContext, useReducer, useEffect} from 'react';

import Notification from '../components/notification';
import {loadUsers, updateData} from './actions';
import {globalStateReducer} from './reducer';

export const UserContext = createContext();

const StateProvider = ({children}) => {

  const initialState = {
    userData: {},
    usersList: [],
    notification: {
      show: false,
      message: '',
    },
  };

  const [state, dispatch] = useReducer(globalStateReducer, initialState);
  const providerState = {...state, dispatch, loadUsers, updateData};

  useEffect(() => {
    loadUsers(dispatch);
    return () => localStorage.removeItem('authenticatedUser');
  }, []);
  
  return (
    <UserContext.Provider value={providerState}>
      {children}
      <Notification data={state.notification} dispatch={dispatch} />
    </UserContext.Provider>
  );
};

export default StateProvider;
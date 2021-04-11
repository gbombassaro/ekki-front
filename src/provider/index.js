import React, {createContext, useReducer, useEffect} from 'react';
import {getUsers} from './actions';
import {globalStateReducer} from './reducer';
import Notification from '../components/notification';
// import UnauthorizedUser from '../components/unauthorizedUser'

export const UserContext = createContext();

const StateProvider = ({children}) => {

  const initialState = {
    data: {},
    authenticatedUser: {},
    usersList: [],
    notification: {
      show: false,
      message: '',
    },
  }

  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  useEffect(() => getUsers(dispatch), []);

  const providerState = {
    ...state,
    dispatch,
    getUsers
  }
  
  return (
    <UserContext.Provider value={providerState}>
      {/* {state.authenticatedUser.id ? children : <UnauthorizedUser/>} */}
      {children}
      <Notification data={state.notification} dispatch={dispatch} />
    </UserContext.Provider>
  );
}

export default StateProvider;
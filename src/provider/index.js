import React, {createContext, useReducer, useEffect} from 'react';
import {loadData, updateData} from './actions';
import {globalStateReducer} from './reducer';
import Notification from '../components/notification';

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
  const providerState = {...state, dispatch, updateData};

  useEffect(() => {
    loadData(dispatch);
    return () => localStorage.removeItem('authenticatedUser');
  }, []);
  
  return (
    <UserContext.Provider value={providerState}>
      {children}
      <Notification data={state.notification} dispatch={dispatch} />
    </UserContext.Provider>
  );
}

export default StateProvider;
import React, {createContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import reducer from './reducer';
import Notification from '../components/notification';

export const UserContext = createContext();

const StateProvider = ({children}) => {

  const initialState = {
    data: {},
    notification: {
      show: false,
      message: '',
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  //TODO: migrar para outro arquivo com métodos
  const getUsers = () => {
    axios.get('http://localhost:3001/api/user/list')
      .then(payload => dispatch({type: 'update', data: payload}))
      .catch(e => dispatch({type: 'notification', show: true, message: e}));
  }

  useEffect(() => getUsers(), []);

  const providerState = {
    ...state,
    dispatch,
    getUsers
  }
  
  return (
    <UserContext.Provider value={providerState}>
      {children}
      <Notification data={state.notification} dispatch={dispatch} />
    </UserContext.Provider>
  );
}

export default StateProvider;
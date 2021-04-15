import axios from 'axios';

export const loadUsers = dispatch => {
  axios.get('http://localhost:3001/api/user/list')
    .then(payload => {
      dispatch({type: 'DATA/LOAD', payload: payload.data});
    })
    .catch(e => {
      dispatch({type: 'NOTIFICATION/SHOW', message: e.message});
    });
};

export const updateData = dispatch => {
  const authenticatedUserId = localStorage.getItem('authenticatedUser');
  axios.get(`http://localhost:3001/api/user/${authenticatedUserId}`)
    .then(payload => {
      dispatch({type: 'DATA/UPDATE', payload: payload.data});
    })
    .catch(e => {
      dispatch({type: 'NOTIFICATION/SHOW', message: e.message});
    });
};
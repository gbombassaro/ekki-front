import axios from 'axios';

export const getUsers = dispatch => {
  axios.get('http://localhost:3001/api/user/list')
    .then(payload => dispatch({type: 'update', data: payload}))
    .catch(e => dispatch({type: 'notification', show: true, message: e.message}));
}
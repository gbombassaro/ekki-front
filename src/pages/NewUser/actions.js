import axios from 'axios';

const domain = 'http://localhost:3001/api';

export const newUser = data => {
  const url = `${domain}/user/create`;
  return axios.post(url, data);
}
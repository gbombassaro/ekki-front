import axios from 'axios';

const domain = 'http://localhost:3001/api';

export const newTransaction = data => {
  const url = `${domain}/transaction/new`;
  return axios.post(url, data)
}
import axios from 'axios';

const domain = 'http://localhost:3001/api';

export const newUser = data => {
  const url = `${domain}/user/create`;
  return axios.post(url, data);
}

export const newBeneficiary = data => {
  const url = `${domain}/user/beneficiary`;
  return axios.post(url, data);
}
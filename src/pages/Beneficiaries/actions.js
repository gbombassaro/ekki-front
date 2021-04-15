import axios from 'axios';

const domain = 'http://localhost:3001/api';

export const newFavorite = data => {
  const url = `${domain}/user/beneficiary`;
  return axios.post(url, data);
}
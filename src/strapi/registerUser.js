// register user

import axios from 'axios';
import url from '../utils/URL';

//
async function registerUser({ email, password, username }) {
  // Esperamos a la repsuesta del LINK, pasando dichos values.
  // Catch error.
  const response = await axios
    .post(`${url}/auth/local/register`, { username, email, password })
    .catch((error) => console.log(error));
  return response;
}

//
export default registerUser;

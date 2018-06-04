import axios from 'axios';

import * as types from './types';

export { login };

function loginAPI (email, password) {
  return axios.post(`http://localhost:8000/api-token-auth/`, { email, password })
    .then(user => user);
}

function login (username, password) {
  return (dispatch) => {
    loginAPI(username, password)
      .then((user) => {
        if (user && user.data.token) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        dispatch(success(user));
      });
  };
  function success (user) { return { type: types.LOGIN_SUCCESS, user }; }
}

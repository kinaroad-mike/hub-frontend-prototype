// import axios from 'axios';
import * as types from './types';
import { api } from '../../middlewares';

export { login };

function login (email, password) {
  return (dispatch) => {
    dispatch(request());
    return api.post('/api-token-auth/', { email, password })
      .then((user) => {
        if (user && user.data.token) {
          localStorage.setItem('authToken', user.data.token);
        }
        dispatch(success(user.data.token));
      });
  };
  function request () { return { type: types.LOGIN_REQUEST }; }
  function success (authToken) { return { type: types.LOGIN_SUCCESS, authToken }; }
}

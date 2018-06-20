// import axios from 'axios';
import * as types from './types';
import { api } from '../../middlewares';
import { history } from '../../../views/utils';
// import { routes } from '../../../routes';

export { login };

function login (email, password, from) {
  return (dispatch) => {
    dispatch(request());
    localStorage.removeItem('authToken');
    return api.post('/api-token-auth/', { email, password })
      .then((user) => {
        if (user && user.data.token) {
          localStorage.setItem('authToken', user.data.token);
        }
        dispatch(success(user.data.token));
        history.push(from.pathname);
      });
  };
  function request () { return { type: types.LOGIN_REQUEST }; }
  function success (authToken) { return { type: types.LOGIN_SUCCESS, authToken }; }
}

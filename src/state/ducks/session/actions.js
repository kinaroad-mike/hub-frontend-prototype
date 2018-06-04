import * as types from './types';
import { api } from '../../middlewares';

export { login };

function login (email, password) {
  return (dispatch) => {
    dispatch(request());
    api.post('/api-token-auth/', { email, password })
      .then((user) => {
        if (user && user.data.token) {
          localStorage.setItem('authToken', JSON.stringify(user.data.token));
        }
        dispatch(success(user));
      });
  };
  function request () { return { type: types.LOGIN_REQUEST }; }
  function success (user) { return { type: types.LOGIN_SUCCESS, user }; }
}

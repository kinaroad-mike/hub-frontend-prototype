import * as types from './types';
import { api } from '../../middlewares';

export { fetchAccounts };

function fetchAccounts () {
  return (dispatch) => {
    dispatch(request());
    return api.get('/api/accounts/')
      .then((accounts) => {
        dispatch(success(accounts.data));
      });
  };

  function request () { return { type: types.FETCH_ACCOUNTS_REQUEST }; }
  function success (accounts) { return { type: types.FETCH_ACCOUNTS_SUCCESS, payload: accounts }; }
}

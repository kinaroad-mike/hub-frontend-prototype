import _ from 'lodash';
import * as types from './types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.FETCH_ACCOUNTS_REQUEST:
      return {
        ...state,
        fetchingAccounts: true
      };
    case types.FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        fetchingAccounts: false,
        items: _.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
}

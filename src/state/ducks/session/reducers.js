import * as types from './types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };

    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    default:
      return state;
  }
}

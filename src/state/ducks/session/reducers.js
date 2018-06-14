import * as types from './types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true
      };

    case types.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: {
          authToken: action.authToken
        }
      };

    default:
      return state;
  }
}

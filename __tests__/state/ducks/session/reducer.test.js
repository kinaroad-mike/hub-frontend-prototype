import reducer from '../../../../src/state/ducks/session';
import * as types from '../../../../src/state/ducks/session/types';

describe('Session Reducer', () => {
  it('Returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('Handles LOGIN_REQUEST', () => {
    expect(reducer([], {
      type: types.LOGIN_REQUEST
    })).toEqual({
      loggingIn: true
    });
  });
  it('Handles LOGIN_SUCCESS', () => {
    expect(reducer([], {
      type: types.LOGIN_SUCCESS,
      authToken: 'Test User'
    })).toEqual({
      loggingIn: false,
      loggedIn: true,
      user: {
        authToken: 'Test User'
      }
    });
  });
});

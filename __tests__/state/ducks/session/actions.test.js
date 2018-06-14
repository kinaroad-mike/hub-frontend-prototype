import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as types from '../../../../src/state/ducks/session/types';
import * as actions from '../../../../src/state/ducks/session/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/*
 Logs the user in by receiving an authentication token from the backend given
 the correct email and password combination
  - LOGIN_REQUEST is dispatched when login action is called
  - LOGIN_SUCCESS is dispatched when 200 response is received from server
  - User token is stored in localstorage
*/

describe('Calling the login action', () => {
  let store;

  beforeEach(() => {
    localStorage.clear();
    store = mockStore({});
  });

  it('Dispatches LOGIN_REQUEST', () => {
    const expectedAction = [
      { type: types.LOGIN_REQUEST }
    ];

    store.dispatch(actions.login());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('Dispatches LOGIN_SUCCESS on 200 response and stores token', () => {
    const loginURL = 'http://localhost:8000/api-token-auth/';
    const testCredentials = {
      email: 'test@test.com',
      password: 'test'
    };

    const mock = new MockAdapter(axios);
    mock.onPost(loginURL, testCredentials).reply(200, { token: 'testToken' });

    const expectedActions = [
      { type: types.LOGIN_REQUEST },
      { type: types.LOGIN_SUCCESS, authToken: 'testToken' }
    ];

    return store.dispatch(actions.login('test@test.com', 'test'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(localStorage.getItem('authToken')).toEqual('testToken');
      });
  });

  it('Doesnt store token', () => {
    const loginURL = 'http://localhost:8000/api-token-auth/';
    const testCredentials = {
      email: 'test@test.com',
      password: 'test'
    };

    const mock = new MockAdapter(axios);
    mock.onPost(loginURL, testCredentials).reply(200, {});

    const expectedActions = [
      { type: types.LOGIN_REQUEST },
      { type: types.LOGIN_SUCCESS, authToken: undefined }
    ];

    return store.dispatch(actions.login('test@test.com', 'test'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(localStorage.getItem('authToken')).not.toEqual('testToken');
      });
  });
});

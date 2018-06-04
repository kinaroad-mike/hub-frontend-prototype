import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../components';
import { sessionOperations } from '../../state/ducks/session';

// Arrange Login Page components and map dispatch and state to props
class Login extends Component {
  render () {
    const {
      login
    } = this.props;

    return (
      <LoginForm
        login={login}
      />
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (username, password) => dispatch(sessionOperations.login(username, password))
  };
}

function mapStateToProps (state) {
  return {
    session: state.session
  };
}
const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export { connectedLogin as Login };

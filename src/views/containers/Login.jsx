import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { LoginForm } from '../components';
import { sessionOperations } from '../../state/ducks/session';

// Connect the LoginForm component to redux form
const LoginFormContainer = reduxForm({
  form: 'LoginForm'
})(LoginForm);

// Connect the LoginForm component to our redux store
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
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

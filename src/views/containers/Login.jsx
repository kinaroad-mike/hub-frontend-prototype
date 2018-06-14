import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { LoginForm } from '../components';
import { sessionOperations } from '../../state/ducks/session';

function validate (values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.email) {
    errors.email = 'Enter an email address';
  }

  if (!values.password) {
    errors.password = 'Enter a password';
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

// Decorate the LoginForm component with redux form
const LoginFormContainer = reduxForm({
  validate,
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

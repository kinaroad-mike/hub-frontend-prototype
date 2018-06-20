import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { routes } from './routes';

// Route wrapper that protects routes that may only be accessed by an
// authenticated user with the correct permissions
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('authToken')
        ? <Component {...props} />
        : <Redirect
          push
          to={{
            pathname: routes.login.path,
            state: { authRedirect: props.location }
          }}
        />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

PrivateRoute.defaultProps = {
  location: undefined
};

import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';

import { fields } from '../utils';

export class LoginForm extends Component {
  constructor (props) {
    super(props);

    // Bind component class to functions
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (values) {
    // Dispatch login action with email and password values
    this.props.login(values.email, values.password);
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <Grid.Row centered>
        <Grid.Column width={6} textAlign="center">
          <form onSubmit={handleSubmit(this.onSubmit)} className="ui equal width form mini">
            <Field
              name="email"
              placeholder="Email"
              component={fields.textInputField}
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              component={fields.textInputField}
            />
            <Button type="submit" fluid inverted color="orange" size="mini">Submit</Button>
          </form>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

LoginForm.propTypes = {
  // Action creators
  login: PropTypes.func.isRequired,

  // Utilised Redux Form props
  handleSubmit: PropTypes.func.isRequired
};

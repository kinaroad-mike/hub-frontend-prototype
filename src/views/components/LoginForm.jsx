import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Grid } from 'semantic-ui-react';

import { fields } from '../utils';

class LoginForm extends Component {
  onSubmit (values) {
    this.props.login(values.email, values.password);
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <Grid.Row centered>
        <Grid.Column width={6} textAlign="center">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="ui equal width form mini">
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

const form = reduxForm({
  form: 'LoginForm'
})(LoginForm);

export { form as LoginForm };

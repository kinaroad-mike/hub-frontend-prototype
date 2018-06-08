import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../../src/views/components';

/*
<LoginForm />
  Contract:
   - It renders a form where the user can enter their login credentials
   - The user can submit the form by clicking the submit button
   - The submitted values are sent to an exernal login() action creator

  Constraints worth testing:
    - The top level html tags are rendered
    - All html tags within the parent tags are rendered
    - A single form element is rendered
    - A single submit button component is rendered
    - Email and password text input field components are rendered and referenced correctly
    - The form is submiteed when the submit button is clicked
    - On submission, a login() action creator is dispatched with the correct values

  Constraints not worth testing:
    - The static styling of the rendered elements
    - That the child components behave as expected
    - The dispatched login() action creator behaves as expected
*/

describe('<LoginForm />', () => {
  // Allows these to be available to everything within the top describe function
  let props;
  let mountedLoginForm;

  // Mount component with current props or return one that has already been mounted
  const loginForm = () => {
    if (!mountedLoginForm) {
      mountedLoginForm = shallow(<LoginForm {...props} />);
    }
    return mountedLoginForm;
  };

  // Reset props and mountedLoginForm - stops state from leaking between tests
  beforeEach(() => {
    props = {
      login: undefined,
      handleSubmit: undefined
    };
    mountedLoginForm = undefined;
  });

  // Test the render method of the LoginForm React component
  describe('render()', () => {
    beforeEach(() => {
      props.login = jest.fn();
      props.handleSubmit = jest.fn();
    });

    it('Renders an outer Grid Row', () => {
      expect(loginForm().find('GridRow').length).toBe(1);
    });

    it('Renders everything within the Grid Row', () => {
      const wrappingGrid = loginForm().find('GridRow').first().children();
      expect(wrappingGrid).toEqual(loginForm().children());
    });

    it('Renders a single <form /> element', () => {
      expect(loginForm().find('form').length).toBe(1);
    });

    it('Renders a submit <Button /> component', () => {
      expect(loginForm().find('[type="submit"]').length).toBe(1);
    });

    it('Renders the correct input form elements', () => {
      expect(loginForm().find('[name="email"]').length).toBe(1);
      expect(loginForm().find('[name="password"]').length).toBe(1);
    });

    it('Submits the form when the submit button is clicked', () => {
      loginForm().find('[type="submit"]').simulate('click');
      expect(props.handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  // Test the onSubmit method of the LoginForm React component
  describe('onSubmit()', () => {
    beforeEach(() => {
      props.login = jest.fn();
      props.handleSubmit = jest.fn();
    });

    it('Calls the login() action creator with email and password credentials', () => {
      const values = {
        email: 'test@test.com',
        password: 'password'
      };
      loginForm().instance().onSubmit(values);
      expect(props.login).toHaveBeenCalledTimes(1);
    });
  });
});

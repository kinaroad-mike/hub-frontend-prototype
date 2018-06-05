import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { LoginForm } from '../../../src/views/components';

const mockStore = configureStore();
const initialState = {};
const store = mockStore(initialState);

describe('<LoginForm />', () => {
  describe('render()', () => {
    test('Renders the component', () => {
      const wrapper = shallow(<LoginForm store={store} />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
  // describe('onSubmit()', () => {
  //   test('Successfully calls onSubmit handler', () => {
  //     // const component = renderer.create(<LoginForm />);
  //     // let tree = toJson(component);

  //     const mockOnSubmit = jest.fn();
  //     const wrapper = shallow(<LoginForm store={store} onSubmit={mockOnSubmit} />).dive().dive().dive();
  //     console.log(wrapper.debug());

  //     wrapper.find('#TEST').simulate('click');

  //     expect(mockOnSubmit.mock.calls.length).toEqual(1);
  //   });
  // });
});

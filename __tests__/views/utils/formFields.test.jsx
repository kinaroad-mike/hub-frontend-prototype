import { shallow } from 'enzyme';
import { fields } from '../../../src/views/utils';

describe('React Semantic UI Form Field Utilities', () => {
  // Allows these to be available to everything within the top describe function
  let field;
  let props;

  // Reset props - stops state from leaking between tests
  beforeEach(() => {
    props = {
      meta: {
        touched: false,
        error: undefined
      },
      placeholder: undefined,
      required: undefined,
      input: {
        value: undefined,
        onChange: undefined,
        onFocus: undefined,
        onBlur: undefined
      }
    };
  });

  describe('textInputField Component', () => {
    /*
      Constraints worth testing:
        - A single parent div is rendered
        - A single input component is rendered
        - Requires input if required prop is true
        - Does not require input if required prop is false
        - Does not require input if required prop is undefined
        - Class name is 'field' if input is not touched and there is no error
        - Class name is 'field' if input is touched and there is no error
        - Class name is 'field error' if input is touched and there is an error
        - Placeholder is '' if placeholder is not defined
        - Placeholder is set if placeholder is a string
        - Placeholder shows error string if input is touched and there is an error
        - Input type is set to empty string if field type prop is undefined
        - Input type is set to string if field type props is a string
        - External onFocus method is called if input is focused on by user
        - External onBlur method is called if input is unfocused on by user
        - External onChange method is called if input is changed on by user
    */
    it('Renders a single parent div field', () => {
      field = shallow(fields.textInputField(props));
      expect(field.find('div').length).toBe(1);
    });

    it('Renders a single Input field component', () => {
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').length).toBe(1);
    });

    it('Requires input if required prop is set true', () => {
      props.required = true;
      field = shallow(fields.textInputField(props));
      const inputComponent = field.find('Input');
      expect(inputComponent.props().required).toBe(true);
    });

    it('Does not require input if required prop is set to false', () => {
      props.required = false;
      field = shallow(fields.textInputField(props));
      const inputComponent = field.find('Input');
      expect(inputComponent.props().required).toBe(false);
    });

    it('Does not require input if required prop is not defined', () => {
      field = shallow(fields.textInputField(props));
      const inputComponent = field.find('Input');
      expect(inputComponent.props().required).toBe(false);
    });

    it('Sets className of input to "field" if input is not touched and there is no error', () => {
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('className')).toBe('field');
    });

    it('Sets className of input to "field" if input is touched and there is no error', () => {
      props.meta.touched = true;
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('className')).toBe('field');
    });

    it('Sets className of input to "field error" if input is touched and there is an error', () => {
      props.meta.touched = true;
      props.meta.error = 'Error Message';
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('className')).toBe('field error');
    });

    it('Sets placeholder of input to an empty string if placeholder prop is undefined', () => {
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('placeholder')).toBe('');
    });

    it('Sets placeholder of input to a string if placeholder prop is a string', () => {
      props.placeholder = 'Test Placeholder';
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('placeholder')).toBe('Test Placeholder');
    });

    it('Sets placeholder of input to the error message if input is touched and there is an error', () => {
      props.placeholder = 'Test Placeholder';
      props.meta.touched = true;
      props.meta.error = 'Error Message';
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('placeholder')).toBe('Error Message');
    });

    it('Sets type of input to empty string if field type prop is undefined', () => {
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('type')).toBe('');
    });

    it('Sets type of input to string if field type prop is a string', () => {
      props.type = 'password';
      field = shallow(fields.textInputField(props));
      expect(field.find('Input').prop('type')).toBe('password');
    });

    it('Triggers external onFocus method (redux-form) when user focuses on input', () => {
      props.input.onFocus = jest.fn();
      field = shallow(fields.textInputField(props));
      field.find('Input').prop('onFocus')();
      expect(props.input.onFocus).toHaveBeenCalled();
    });

    it('Triggers external onBlur method (redux-form) when user unfoucses on input', () => {
      props.input.onBlur = jest.fn();
      field = shallow(fields.textInputField(props));
      field.find('Input').prop('onBlur')();
      expect(props.input.onBlur).toHaveBeenCalled();
    });

    it('Triggers external onChange method (redux-form) when user unfoucses on input', () => {
      const mockParam = {};
      const mockData = { value: 'test' };
      props.input.onChange = jest.fn();
      field = shallow(fields.textInputField(props));
      field.find('Input').prop('onChange')(mockParam, mockData);
      expect(props.input.onChange).toHaveBeenCalled();
    });
  });
});

import React from 'react';
import {
  Form,
  Input
} from 'semantic-ui-react';

export const fields = {
  textInputField
};

function textInputField (field) {
  // Render a simple text input field
  // Props:
  //    placeholder   string
  //    required    bool

  const { meta: { touched, error } } = field;
  const className = `field${touched && error ? ' error' : ''}`;
  const placeholderInit = field.placeholder ? field.placeholder : '';
  const placeholder = (touched && error) ? error : placeholderInit;

  return (
    <Form.Field>
      <Input
        placeholder={placeholder}
        required={field.required ? field.required : false}
        value={field.input.value}
        onChange={(param, data) => field.input.onChange(data.value)}
        onFocus={() => field.input.onFocus()}
        onBlur={() => field.input.onBlur()}
        className={className}
        type={field.type ? field.type : ''}
      />
    </Form.Field>
  );
}

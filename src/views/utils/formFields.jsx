import React from 'react';
import {
  Dropdown,
  Form,
  Input
} from 'semantic-ui-react';

export const fields = {
  additionDropdownField,
  dateInputField,
  moneyInputField,
  searchableDropdownField,
  textInputField
};

function additionDropdownField (field) {
  // Not currently working, need to handle onAddItem!!
  return (
    <Form.Field>
      <Dropdown
        placeholder="Add or search..."
        search
        selection
        allowAdditions
        value={field.input.value}
        onChange={(param, data) => field.input.onChange(data.value)}
        options={field.options ? field.options : []}
        loading={field.fetching}
        onAddItem={field.addItem}
      />
    </Form.Field>
  );
}

function dateInputField (field) {
  // Temporary solution to render input field as type data
  // to show datepicker
  // Props:
  //    required    bool

  return (
    <Form.Field>
      <Input
        required={field.required ? field.required : false}
        type="date"
        value={field.input.value}
        onChange={(param, data) => field.input.onChange(data.value)}
      />
    </Form.Field>
  );
}

function moneyInputField (field) {
  // Renders an input field for user to provide dollar amounts to.
  // When used in conjunction with operatorButtonsField and the
  // parent component is bound, it's background color will
  // automatically adjust.
  // Props:
  //    placeholder   string
  //    required    bool

  let className = '';
  try {
    className = field.meta.visited ? `${this.state.operator}-background` : '';
  } catch (e) {
    className = '';
  }

  return (
    <Form.Field>
      <Input
        placeholder={field.placeholder ? field.placeholder : ''}
        required={field.required ? field.required : false}
        icon="dollar"
        iconPosition="left"
        type="number"
        step="0.01"
        value={field.input.value}
        onChange={(param, data) => field.input.onChange(data.value)}
        onFocus={() => field.input.onFocus()}
        onBlur={() => field.input.onBlur()}
        className={className}
      />
    </Form.Field>
  );
}

function textInputField (field) {
  // Render a simple text input field
  // Props:
  //    placeholder   string
  //    required    bool
  const { meta: { touched, error } } = field;
  const className = `field ${touched && error ? 'error' : ''}`;

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

function searchableDropdownField (field) {
  // Renders a searchable dropdown field
  // Props:
  //    options     {'value', 'text', 'key'}
  //    placeholder   string
  //    required    bool

  return (
    <Form.Field>
      <Dropdown
        placeholder={field.placeholder ? field.placeholder : ''}
        required={field.required ? field.required : false}
        search
        selection
        value={field.input.value}
        onChange={(param, data) => field.input.onChange(data.value)}
        options={field.options ? field.options : []}
        loading={!field.options}
      />
    </Form.Field>
  );
}

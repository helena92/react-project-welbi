import { FormInputLabel, Input, CheckboxInput, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {otherProps.type === 'checkbox' ? <CheckboxInput {...otherProps} /> : <Input {...otherProps} />}
      {label && (
        <FormInputLabel
          top={otherProps.type === 'checkbox' ? false : true}
          shrink={otherProps.type === 'checkbox' ? 0 : otherProps.type === 'date' ? 1 : otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

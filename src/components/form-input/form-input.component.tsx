import React from 'react';
import { FormInputLabel, Input, CheckboxInput, Group } from './form-input.styles';

interface FormInputProps {
  label?: string;
  type: string;
  value?: any;
  name: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      {otherProps.type === 'checkbox' ? (
        <CheckboxInput {...otherProps} />
      ) : (
        <Input {...otherProps} />
      )}
      {label && (
        <FormInputLabel
          top={otherProps.type === 'checkbox' ? false : true}
          shrink={
            otherProps.type === 'checkbox'
              ? 0
              : otherProps.type === 'date'
              ? 1
              : otherProps.value?.length ?? 0
          }
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

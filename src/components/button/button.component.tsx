import React from 'react';
import { BaseButton, InvertedButton } from './button.styles';

export type BUTTON_TYPE = 'base' | 'inverted';

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'base', ...otherProps }) => {
  const ButtonType = buttonType === 'base' ? BaseButton : InvertedButton;
  return <ButtonType {...otherProps}>{children}</ButtonType>;
};

export default Button;

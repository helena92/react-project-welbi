import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { BaseButton, InvertedButton } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  inverted = 'inverted',
}

export type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({ children, buttonType = 'base', ...otherProps }) => {
  const ButtonType = buttonType === 'base' ? BaseButton : InvertedButton;
  return <ButtonType {...otherProps}>{children}</ButtonType>;
};

export default Button;

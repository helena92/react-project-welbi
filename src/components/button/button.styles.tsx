import styled from 'styled-components';
import { BUTTON_TYPE_CLASSES } from './button.component'

interface BaseButtonProps {
  buttonType?: BUTTON_TYPE_CLASSES.base | BUTTON_TYPE_CLASSES.inverted;
}

export const BaseButton = styled.button<BaseButtonProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

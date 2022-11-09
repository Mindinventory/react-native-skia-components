import React from 'react';
import { FloatingButton } from '../floatingButton';
import { NeoPopButton } from '../neoPopButton/';
import type { ButtonProps } from './button.type';

const buttonPresets = {
  neoPop: NeoPopButton,
  floating: FloatingButton,
};

export type ButtonPresets = keyof typeof buttonPresets;

const Button = (props: ButtonProps) => {
  const { preset = 'neoPop' } = props;
  const ButtonComponent = buttonPresets[preset];

  return <ButtonComponent {...props} />;
};

export default Button;

import React from 'react';

import { FloatingButton } from '../floatingButton';
import type { FloatingButtonProps } from '../floatingButton/floatingButton.type';
import { NeoPopButton, NeoPopButtonProps } from '../neoPopButton/';
import type { StarWarButtonProps } from '../starWarButton/starWarButton.type';
import StarWarButton from '../starWarButton/starWarButtonContainer';

const buttonPresets = {
  floating: FloatingButton,
  neoPop: NeoPopButton,
  starWar: StarWarButton,
};

export type ButtonPresets = keyof typeof buttonPresets;

export type Button2Props<TGradientType = 'neoPop' | 'starWar' | 'floating'> =
  TGradientType extends 'neoPop'
    ? NeoPopButtonProps & {
        preset?: TGradientType;
      }
    : TGradientType extends 'starWar'
    ? StarWarButtonProps & {
        preset?: TGradientType;
      }
    : FloatingButtonProps & {
        preset?: TGradientType;
      };

const Button = (props: Button2Props) => {
  const { preset = 'neoPop' } = props;
  const ButtonComponent = buttonPresets[preset];

  return <ButtonComponent {...props} />;
};

export default Button;

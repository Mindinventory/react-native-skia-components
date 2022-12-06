import React from 'react';

import { FloatingButton } from '../floatingButton';
import type { FloatingButtonProps } from '../floatingButton/floatingButton.type';
import { NeoPopButton, NeoPopButtonProps } from '../neoPopButton';
import type { StarWarButtonProps } from '../starWarButton/starWarButton.type';
import { StarWarButton } from '../starWarButton/starWarButtonContainer';

const buttonPresets = {
  floating: FloatingButton,
  neoPop: NeoPopButton,
  starWar: StarWarButton,
};

export type ButtonPresets = keyof typeof buttonPresets;

export type ButtonProps<TPresetType = 'neoPop' | 'starWar' | 'floating'> =
  TPresetType extends 'neoPop'
    ? NeoPopButtonProps & {
        preset?: TPresetType;
      }
    : TPresetType extends 'starWar'
    ? StarWarButtonProps & {
        preset?: TPresetType;
      }
    : FloatingButtonProps & {
        preset?: TPresetType;
      };

const Button = (props: ButtonProps) => {
  const { preset = 'neoPop' } = props;
  const ButtonComponent = buttonPresets[preset];

  return <ButtonComponent {...props} />;
};

export default Button;

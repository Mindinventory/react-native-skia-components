import type { Vector } from '@shopify/react-native-skia';

import type { ButtonProps } from '../button/button.type';

export type StarWarButtonType = {
  colors?: string | string[];
  filled?: FilledTypes;
  blurRadius?: number;
  buttonBorderRadius?: number;
  titleColor?: string;
  animation?: boolean;
  animationDuration?: number;
  buttonEffectDuration?: number;
} & ButtonProps;

export enum GradientType {
  LINEAR = 'LINEAR',
  RADIAL = 'RADIAL',
  SWEEP = 'SWEEP',
}

export type GradientTypes = keyof typeof GradientType;

export enum FilledType {
  solid = 'solid',
  outer = 'outer',
  inner = 'inner',
  normal = 'normal',
}

export type FilledTypes = keyof typeof FilledType;

export type StarWarButtonProps<TGradientType = GradientTypes> =
  TGradientType extends 'LINEAR'
    ? StarWarButtonType & {
        gradientType?: TGradientType;
        start?: Vector;
        end?: Vector;
      }
    : TGradientType extends 'RADIAL'
    ? StarWarButtonType & {
        gradientType?: TGradientType;
        radius?: number;
        center?: Vector;
      }
    : StarWarButtonType & {
        gradientType?: TGradientType;
        center?: Vector;
      };

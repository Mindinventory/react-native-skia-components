import type { Vector } from '@shopify/react-native-skia';

import type { ButtonProps } from '../button/button.type';

export type StarWarButtonType = {
  colors?: string | string[];
  filled?: 'solid' | 'outer' | 'inner' | 'normal';
  blurRadius?: number;
  buttonBorderRadius?: number;
  titleColor?: string;
  animation?: boolean;
  animationDuration?: number;
  buttonEffectDuration?: number;
} & ButtonProps;

export type GradientTypes = 'sweep' | 'linear' | 'radial';

export enum GradientType {
  Linear = 'linear',
  Radial = 'radial',
  Sweep = 'sweep',
}

export enum FilledType {
  Solid = 'solid',
  Outer = 'outer',
  Inner = 'inner',
  Normal = 'normal',
}

export type StarWarButtonProps<TGradientType = GradientTypes> =
  TGradientType extends 'linear'
    ? StarWarButtonType & {
        gradientType?: TGradientType;
        start?: Vector;
        end?: Vector;
      }
    : TGradientType extends 'radial'
    ? StarWarButtonType & {
        gradientType?: TGradientType;
        radius?: number;
        center?: Vector;
      }
    : StarWarButtonType & {
        gradientType?: TGradientType;
        center?: Vector;
      };

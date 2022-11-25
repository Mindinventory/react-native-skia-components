import type { Vector } from '@shopify/react-native-skia';

import type { ButtonProps } from '../button/button.type';

// export type StarWarButtonProps = {
//   colors: string | string[];
//   filled?: 'solid' | 'outer' | 'inner' | 'normal';
//   blurRadius?: number;
//   buttonBorderRadius?: number;
//   titleColor?: string;
//   animation?: boolean;
// } & ButtonProps &
//   GradientType;

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

export type GradientType = 'sweep' | 'linear' | 'radial';

export enum GradientTypes {
  Linear = 'linear',
  Radial = 'radial',
  Sweep = 'sweep',
}

export enum FilledTypes {
  Solid = 'solid',
  Outer = 'outer',
  Inner = 'inner',
  Normal = 'normal',
}

export type StarWarButtonProps<TGradientType = GradientType> =
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

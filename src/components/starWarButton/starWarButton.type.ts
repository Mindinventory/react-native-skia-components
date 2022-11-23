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
} & ButtonProps;

export type GradientType = 'sweep' | 'linear' | 'radial';

export enum GradientTypes {
  Linear = 'linear',
  Radial = 'radial',
  Sweep = 'sweep',
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

// const start: StarWarButtonProps = {
//   gradientType: 'radial',

// };

// interface gradientLinear {
//   gradientType?: GradientTypes.Linear;
//   start?: Vector;
//   end?: Vector;
// }

// interface gradientSweep {
//   gradientType?: GradientTypes.Sweep;
//   center?: Vector;
// }

// interface gradientRadial {
//   gradientType?: GradientTypes.Radial;
//   radius?: number;
//   center?: Vector;
// }

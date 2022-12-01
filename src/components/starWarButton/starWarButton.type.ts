import type { Vector } from '@shopify/react-native-skia';

import type { ButtonProps } from '../button/button.type';

export type StarWarButtonType = {
  /**
   * Provide an colors to button border and inside.
   * @example
   *  colors={'green'}
   * colors={['red']`}
   * colors={['rgb(0,0,0)', '#ffffff']}
   * colors={['cyan', 'magenta', 'yellow', 'cyan']}
   * @default['cyan', 'magenta', 'yellow', 'cyan'].
   * @type  string | string[]
   */
  colors?: string | string[];
  /**
   * Button inside filled type "solid" | "outer" | "inner" | "inner".
   * @enum
   * - `solid`: Button inside and outside color filled with star lights.
   * - `outer`: only button border filled with colors.
   * - `inner`: inner side blur mask and inside button color filled.
   * - `normal`: To blur the whole button component.
   * @example
   * filled={'solid'}
   * @default 'solid'
   * @type `solid` | `outer` | `inner` | `normal`
   */
  filled?: FilledTypes;
  /**
   * Button star light blur radius.
   * @example
   * blurRadius={15}
   * @default 10
   * @type number
   */
  blurRadius?: number;
  /**
   * inside button color border radius of the button view.
   * @example
   * buttonBorderRadius={15}
   * @default 10
   * @type number
   */
  buttonBorderRadius?: number;
  /**
   * Provide an button tittle text color.
   * @example
   * titleColor={'black'}
   * @default black
   * @type string
   */
  titleColor?: string;
  /**
   * Button star light should be animated or not.
   * @example
   * animation={false}
   * @default true
   * @type boolean
   */
  animation?: boolean;
  /**
   * Provides an button animation duration timing slow or fast button animations.
   * @example
   * animationDuration={1500}
   * @default 1000
   * @type number
   */
  animationDuration?: number;
  /**
   * Provides an button press effect duration of animation timing.
   * @example
   * buttonEffectDuration={500}
   * @default 1000
   * @type number
   */
  buttonEffectDuration?: number;
} & ButtonProps;

export enum GradientType {
  linear = 'linear',
  radial = 'radial',
  sweep = 'sweep',
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
  TGradientType extends 'linear'
    ? StarWarButtonType & {
        /**
         * Defines button should be Linear Gradient.
         * @example
         * gradientType={'linear'}
         * @default linear
         * @type `"linear" | "radial" | "sweep"`
         */
        gradientType?: TGradientType;
        /**
         * Provide an start of the Linear Gradient.
         * @example
         * start={{x: 10, y: 10 }}
         * @type `Vector`
         */
        start?: Vector;
        /**
         * Provide an end of the Linear Gradient.
         * @example
         * start={{x: 10, y: 10 }}
         * @type `Vector`
         */
        end?: Vector;
      }
    : TGradientType extends 'radial'
    ? StarWarButtonType & {
        /**
         * Defines button should be Radial Gradient.
         * @example
         * gradientType={'radial'}
         * @default linear
         * @type `"linear" | "radial" | "sweep"`
         */
        gradientType?: TGradientType;
        /**
         * Provide an radius of the Radial Gradient.
         * @example
         * radius={10}
         * @type `number`
         */
        radius?: number | any;
        /**
         * Provide an center of Radial gradient from where colors start.
         * @example
         * center={{x: 0, y: 0 }}
         * @type `Vector`
         */
        center?: Vector;
      }
    : StarWarButtonType & {
        /**
         * Defines button should be Sweep Gradient.
         * @example
         * gradientType={'sweep'}
         * @default linear
         * @type `"linear" | "radial" | "sweep"`
         */
        gradientType?: TGradientType;
        /**
         * Provide an center of sweep gradient from where colors start.
         * @example
         * center={{x: 0, y: 0 }}
         * @type `Vector`
         */
        center?: Vector;
      };

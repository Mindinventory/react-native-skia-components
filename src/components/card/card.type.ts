import type { StyleProp, ViewStyle } from 'react-native';

export interface CardProps {
  /**
   * @default black.
   * @type string.
   */
  backgroundColor?: string;
  /**
   * Defines border of card blur mask value.
   * @example blur={10}
   * @default 10.
   * @type number
   */
  blur?: number;
  /**
   * Provide colors of border.
   * @example
   * borderColors={['red']`}
   * borderColors={['rgb(0,0,0)', '#ffffff']}
   * borderColors={['cyan', 'magenta', 'yellow', 'cyan']}
   * @default['cyan', 'magenta', 'yellow', 'cyan'].
   * @type string[ ]
   */
  borderColors?: string[];
  /**
   * @example
   * borderColors={10}
   * @default 5
   * @type number
   */
  borderWidth?: number;
  /**
   * Defines card radius.
   * @example
   * cardRadius={10}
   * @default 20
   * @type number
   */
  cardRadius?: number;
  /**
   * render elements render inside the card.
   * @type JSX.Element
   */
  children: JSX.Element;
  /**
   * Provide height to card
   * @example
   * height={180}
   * @default 256
   * @type number
   */
  height?: number;
  /**
   * Defaults to screen size width of 90%.
   * @example
   * width = {ScreenWidth * 0.9}
   * width = {150}
   * @default ScreenWidth * 0.9
   * @type number.
   */
  width?: number;
  /**
   * Animate inside card children elements to none, rotate and bounce.
   * @enum
   * - `none`: no animation on card children elements
   * - `rotate`: rotation animation on card children elements
   * - `bounce`: bounce animation on card children elements
   * @example
   * animation={'rotate'}
   * @default 'rotate'
   * @type `none` | `rotate` | `bounce`
   */
  animation?: AnimationTypes;
  /**
   * Provide an style to inner elements of the card.
   * @type StyleProp<ViewStyle>
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Animate Border colors to the none, normal, disco, and yoyo.
   * @enum
   * - `none`: no animation on card border
   * - `normal`: border animation on card in normal speed
   * - `disco`:  border animation on card in fast forward speed
   * - `yoyo`: animate card border in to fro way
   * @example
   * animateBorder={'disco'}
   * @default 'normal'
   * @type `none` | `normal` | `disco` | `yoyo`
   */
  animateBorder?: AnimateBorderTypes;
  /**
   * Animation duration time for card border colors rotation
   * @default 3000.
   * @type number
   */
  duration?: number;
}

/**
 * BackgroundGradientProps props for canvas elements
 */
export interface BackgroundGradientProps {
  blur: number;
  borderColors: string[];
  canvasPadding: number;
  cardRadius: number;
  height: number;
  width: number;
  animateBorder: AnimateBorderTypes;
  duration: number;
}

export enum AnimateBorderType {
  none = 'none',
  normal = 'normal',
  disco = 'disco',
  yoyo = 'yoyo',
}
export enum AnimationType {
  none = 'none',
  rotate = 'rotate',
  bounce = 'bounce',
}
export type AnimateBorderTypes = keyof typeof AnimateBorderType;
export type AnimationTypes = keyof typeof AnimationType;

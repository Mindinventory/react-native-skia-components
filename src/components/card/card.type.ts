import type { ViewStyle } from 'react-native';

export interface CardProps {
  /**
   * Defaults to black.
   */
  backgroundColor?: string;
  /**
   * Blur mask of border of the card.
   * Defaults to 10.
   */
  blur?: number;
  /**
   * Provide an borderColors in array format.
   * For example ['red'] , ['green', 'black']
   * Defaults to ['cyan', 'magenta', 'yellow', 'cyan'].
   */
  borderColors?: string[];
  /**
   * Defaults to 5.
   */
  borderWidth?: number;
  /**
   * Defaults to 20.
   */
  cardRadius?: number;
  /**
   * render elements render inside the card.
   */
  children: JSX.Element;
  /**
   * Defaults to 256.
   * You can provide number
   */
  height?: number;
  /**
   * Defaults to screen size width of 90%.
   * Example ScreenWidth * 0.9.
   * You can provide number.
   */
  width?: number;
  /**
   * Animate inside card children elements to none, rotate and bounce.
   */
  animation?: AnimationTypes;
  /**
   * Provide an style to inner elements of the card.
   */
  style?: ViewStyle;
  /**
   * Animate Border colors to the none, normal, disco, yoyo wise.
   */
  animateBorder?: AnimateBorderTypes;
  /**
   * Defaults to 3000.
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

import type { StyleProp, ViewStyle } from 'react-native';

import type { FlipView } from '.';

export type RefType = {
  /**
   * isFlip will provide a whether view is flipped or not.
   * @type boolean
   */
  isFlip: boolean;
  /**
   * to Flip a view call this function.
   * @type boolean
   */
  flip: () => void;
};

export enum FlipDirectionType {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type FlipDirectionTypes = keyof typeof FlipDirectionType;

export interface FlipCardPropType {
  /**
   * Provide an style to inner elements of the `FlipView`.
   * @type StyleProp<ViewStyle>
   */
  style?: StyleProp<ViewStyle>;
  /**
   * render elements render inside the `FlipView`.
   * @type JSX.Element
   */
  children: JSX.Element[];
  /**
   * Provide an flipZoom scale of the view when it animate.
   * @example
   * flipZoom={0.1}
   * @default 0.009
   * @type number
   */
  flipZoom?: number;
  /**
   * Provide an flipDirection of the view that in horizontal or vertical.
   * @enum
   * - `horizontal`: FlipView in horizontal.
   * - `vertical`: FlipView in vertical.
   * @example
   * flipDirection={'horizontal'}
   * @default 'horizontal'
   * @type `horizontal` | `vertical`
   */
  flipDirection?: FlipDirectionTypes;
  /**
   * Provide an perspective value of the view for zIndex
   * @example
   * perspective={300}
   * @default 800
   * @type number
   */
  perspective?: number;
  /**
   * duration of the flip card animation.
   * @example
   * duration={2000}
   * @default 500
   * @type number
   */
  duration?: number;
}

export type FlipViewRef = React.ElementRef<typeof FlipView>;

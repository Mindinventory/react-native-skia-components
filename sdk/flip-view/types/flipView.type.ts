import type { StyleProp, ViewStyle } from 'react-native';

import type { FlipView } from '..';

export type RefType = {
  /**
   * to Flip a view call this function.
   * @type boolean
   */
  flip: () => void;
  /**
   * isFlip will provide a whether view is flipped or not.
   * @type boolean
   */
  isFlip: boolean;
};

export enum FlipDirectionType {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type FlipDirectionTypes = keyof typeof FlipDirectionType;

export interface FlipCardPropType {
  /**
   * Element that render on `Back` side of the view.
   * @type JSX.Element
   */
  backView?: JSX.Element;
  /**
   * duration of the flip card animation.
   * @example
   * duration={2000}
   * @default 500
   * @type number
   */
  duration?: number;
  /**
   * Provide an flipDirection of the view that in horizontal or vertical.
   * @enum
   * - `horizontal`: FlipView in horizontal way.
   * - `vertical`: FlipView in vertical way.
   * @example
   * flipDirection={'horizontal'}
   * @default 'horizontal'
   * @type `horizontal` | `vertical`
   */
  flipDirection?: FlipDirectionTypes;
  /**
   * Provide an flipZoom scale of the view when it animate.
   * @example
   * flipZoom={0.1}
   * @default 0.009
   * @type number
   */
  flipZoom?: number;
  /**
   * Element that render on `Front` side of the view.
   * @type JSX.Element
   */
  frontView?: JSX.Element;
  /**
   * Provide an perspective value of the view for zIndex
   * @example
   * perspective={300}
   * @default 800
   * @type number
   */
  perspective?: number;
  /**
   * Provide an style to inner elements of the `FlipView`.
   * @type StyleProp<ViewStyle>
   */
  style?: StyleProp<ViewStyle>;
}

export type FlipViewRef = React.ElementRef<typeof FlipView>;

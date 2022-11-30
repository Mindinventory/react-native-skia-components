import type { TextStyle, ViewStyle } from 'react-native';

import type { ButtonPresets } from './button';

export interface ButtonProps {
  /**
   * Defines backgroundColor of the button.
   * @example
   * backgroundColor={"red"}
   * backgroundColor={"#000000"}
   * backgroundColor={"rgba(250, 226, 46, 1)"}
   * @type string
   */
  backgroundColor?: string;
  /**
   * Defines bottomShadowColor of the button.
   * @example
   * bottomShadowColor={"gray"}
   * bottomShadowColor={"#202020"}
   * bottomShadowColor={"rgba(255, 255, 255, 99)"}
   * @type string
   */
  bottomShadowColor?: string;
  /**
   * Defines depth of the button.
   * @example
   * depth={10}
   * @default 10
   * @type string
   */
  depth?: number;
  /**
   * Button height.
   * @example
   * height={40}
   * @default 50
   * @type number
   */
  height?: number;
  /**
   * Button should be floatable or not.
   * @example
   * isFloating={false}
   * @default true
   * @type boolean
   */
  isFloating?: boolean;
  onLongPress?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  preset?: ButtonPresets;
  shadowHeight?: number;
  sideShadowColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  titleSize?: number;
  width?: number;
}

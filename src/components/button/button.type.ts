import type {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

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
  /**
   * Called when the touch is released,
   * but not if cancelled (e.g. by a scroll that steals the responder lock).
   */
  onLongPress?: (event: GestureResponderEvent) => void;
  /**
   * Called when the touch is released,
   * but not if cancelled (e.g. by a scroll that steals the responder lock).
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Defines which button should you want to display
   * @enum
   * - `floating`: floating button
   * - `neoPop`: NeoPopButton
   * - `starWar`:  StarWarButton
   * @example
   * preset={'neoPop'}
   * @default "neoPop"
   * @type `"floating" | "neoPop" | "starWar"`
   */
  preset?: ButtonPresets;
  /**
   * Defines height of the button shadow
   * @example
   * shadowHeight={15}
   * @default 10
   * @type number
   */
  shadowHeight?: number;
  /**
   * Defines button side shadow color
   * @example
   * sideShadowColor={"red"}
   * sideShadowColor={"#000000"}
   * sideShadowColor={"rgba(250, 226, 46, 1)"}
   * @default rgba(195, 161, 60,1)
   * @type string
   */
  sideShadowColor?: string;
  /**
   * Provide an style to button.
   * @type StyleProp<ViewStyle>
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Provide an style to button title text.
   * @type TextStyle
   */
  textStyle?: TextStyle;
  /**
   * Provide an title to button.
   * @type string
   */
  title?: string;
  /**
   * Provide an button title size font size of title.
   * @example
   * titleSize={10}
   * @type number
   */
  titleSize?: number;
  /**
   * Defines width of the button.
   * @example
   * width={40}
   * @default 150
   * @type number
   */
  width?: number;
}

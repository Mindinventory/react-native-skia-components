import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import type { AnimatedStyleProp } from 'react-native-reanimated';

export interface BottomSheeetProps {
  /**
   * Bottomsheet should be visible or not.
   * @example
   * isVisible={false}
   * @default true
   * @type boolean
   */
  isVisible: boolean;
  children: JSX.Element;
  showHandle?: boolean;
  onClose?: () => void;
}

export interface CustomBottomSheetProps {
  animatedStyles: AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>;
  gestureHandler: any;
  children: JSX.Element;
  showHandle?: boolean;
}

export enum DisplayEnum {
  displayTypeNone = 'none',
  displayTypeFlex = 'flex',
}

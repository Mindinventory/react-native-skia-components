import type { TextStyle, ViewStyle } from 'react-native';

import type { ButtonPresets } from './button';

export interface ButtonProps {
  backgroundColor?: string;
  bottomShadowColor?: string;
  depth?: number;
  height?: number;
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

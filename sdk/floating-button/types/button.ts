import type { TextStyle, ViewStyle } from 'react-native';

export interface ButtonProps {
  backgroundColor?: string;
  bottomShadowColor?: string;
  depth?: number;
  height?: number;
  onLongPress?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  shadowHeight?: number;
  sideShadowColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  titleSize?: number;
  width?: number;
}

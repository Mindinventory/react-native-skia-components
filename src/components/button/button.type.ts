import type { TextStyle, ViewStyle } from 'react-native';
import type { ButtonPresets } from './button';

export enum Direction {
  Left,
  Right,
}

export interface ButtonProps {
  preset?: ButtonPresets;
  style?: ViewStyle;
  title?: string;
  height?: number;
  width?: number;
  depth?: number;
  shadowHeight?: number;
  backgroundColor?: string;
  bottomShadowColor?: string;
  sideShadowColor?: string;
  textStyle?: TextStyle;
  titleSize?: number;
  buttonDirection?: Direction;
  isFloating?: boolean;
}

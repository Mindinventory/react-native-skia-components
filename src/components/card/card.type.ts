import type { ViewStyle } from 'react-native';

export type AnimateBorderType = 'NONE' | 'NORMAL' | 'DISCO' | 'YOYO';
export interface CardProps {
  backgroundColor?: string;
  blur?: number;
  borderColors?: string[];
  borderWidth?: number;
  cardRadius?: number;
  height?: number;
  width?: number;
  animation?: 'NONE' | 'ROTATE' | 'BOUNCE';
  style?: ViewStyle;
  animateBorder?: AnimateBorderType;
  duration?: number;
}

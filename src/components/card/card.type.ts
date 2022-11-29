import type { ViewStyle } from 'react-native';

export type AnimateBorderTypes = 'NONE' | 'NORMAL' | 'DISCO' | 'YOYO';

export type AnimationTypes = 'NONE' | 'ROTATE' | 'BOUNCE';
export interface CardProps {
  backgroundColor?: string;
  blur?: number;
  borderColors?: string[];
  borderWidth?: number;
  cardRadius?: number;
  children: JSX.Element;
  height?: number;
  width?: number;
  animation?: AnimationTypes;
  style?: ViewStyle;
  animateBorder?: AnimateBorderTypes;
  duration?: number;
}

export enum AnimateBorderType {
  NONE = 'NONE',
  NORMAL = 'NORMAL',
  DISCO = 'DISCO',
  YOYO = 'YOYO',
}

export enum AnimationType {
  NONE = 'NONE',
  ROTATE = 'ROTATE',
  BOUNCE = 'BOUNCE',
}

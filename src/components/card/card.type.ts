import type { ViewStyle } from 'react-native';

export interface CardProps {
  /*
  badfkdkn ex
  */
  backgroundColor?: string;
  blur?: number;
  /*
  badfkdkn exampe ['grey'. '#fgfff', 'reg.()]
  */
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
export type AnimateBorderTypes = keyof typeof AnimateBorderType;
export type AnimationTypes = keyof typeof AnimationType;

import type { ButtonProps } from '../button/button.type';

export interface FloatingButtonProps extends ButtonProps {
  strokeColor?: string;
  buttonType?: ButtonTypes;
}

// Elevated
// Flat
// Flat Strokes
export enum ButtonType {
  flat = 'flat',
  flatStrokes = 'flatStrokes',
  elevated = 'elevated',
  elevatedStrokes = 'elevatedStrokes',
}

export type ButtonTypes = keyof typeof ButtonType;

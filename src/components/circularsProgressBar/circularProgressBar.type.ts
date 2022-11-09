export interface CircularProgressBarProps {
  /* to specified radius */
  radius?: number;
  colors?: string[];
  padding?: number;
  fontSize?: number;
  progress?: number;
  containerSize?: number;
  gradientColors?: string[];
  shadowBlur?: number;
  shadowColor?: string;
  shadowRadius?: number;
  shadowOpacity?: number;
  elevation?: number;
  strokeWidth?: number;
  shadowOffset?: { width: number; height: number } | undefined;
  backgroundColor?: string;
}

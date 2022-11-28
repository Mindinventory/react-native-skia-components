export interface CircularProgressBarProps {
  /* to specified radius */
  backgroundColor?: string;
  colors?: string[];
  containerSize?: number;
  elevation?: number;
  fontSize?: number;
  gradientColors?: string[];
  padding?: number;
  progress?: number;
  radius?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number } | undefined;
  shadowOpacity?: number;
  shadowRadius?: number;
  strokeWidth?: number;
}

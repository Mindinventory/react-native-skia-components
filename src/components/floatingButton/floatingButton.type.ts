import type { ButtonProps } from '../button/button.type';

export interface FloatingButtonProps extends ButtonProps {
  floatAnimation?: boolean;
  duration?: number;
}

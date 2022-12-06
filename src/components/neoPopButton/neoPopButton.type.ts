import type { ButtonProps } from '../button/button.type';

export interface NeoPopButtonProps extends ButtonProps {
  /**
   * Animate button floating animation or not.
   * @example
   * floatAnimation={false}
   * @default true
   * @type boolean
   */
  floatAnimation?: boolean;
  /**
   * Animation duration time for card border colors rotation
   * @default 800.
   * @type number
   */
  duration?: number;
  /**
   * Disabled button.
   * @example
   * disabled={true}
   * @default false
   * @type boolean
   */
  disabled?: boolean;
}

import type { CardProps } from './card.type';
import { Dimensions } from 'react-native';
import { miColor } from '../../themes';

const { width: ScreenWidth } = Dimensions.get('window');
const CARD_BLUR = 10;
const CARD_BORDER_WIDTH = 20;
const CARD_RADIUS = 20;
const HEIGHT = 256;
const PADDING = 40;

export const useCard = (props: CardProps) => {
  const {
    width = ScreenWidth * 0.9,
    height = HEIGHT,
    backgroundColor = miColor.black,
    cardRadius = CARD_RADIUS,
    borderWidth = CARD_BORDER_WIDTH,
    borderColors = [
      miColor.cyan,
      miColor.magenta,
      miColor.yellow,
      miColor.cyan,
    ],
    blur = CARD_BLUR,
  } = props;
  const canvasPadding = PADDING;
  const CARD_WIDTH = width - borderWidth;
  const CARD_HEIGHT = height - borderWidth;
  return {
    backgroundColor,
    blur,
    borderColors,
    borderWidth,
    canvasPadding,
    CARD_HEIGHT,
    CARD_WIDTH,
    cardRadius,
    height,
    width,
  };
};

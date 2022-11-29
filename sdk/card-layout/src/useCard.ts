import { Dimensions } from 'react-native';

import type { CardProps } from './card.type';

const { width: ScreenWidth } = Dimensions.get('window');
export const useCard = (props: CardProps) => {
  const {
    width = ScreenWidth * 0.9,
    height = 256,
    backgroundColor = '#000',
    cardRadius = 20,
    borderWidth = 5,
    borderColors = ['cyan', 'magenta', 'yellow', 'cyan'],
    blur = 10,
  } = props;
  const canvasPadding = 40;
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
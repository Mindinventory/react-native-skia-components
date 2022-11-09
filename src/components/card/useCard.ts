import type { CardProps } from './card.type';
import { Dimensions } from 'react-native';

const { width: ScreenWidth } = Dimensions.get('window');
export const useCard = (props: CardProps) => {
  const {
    width = ScreenWidth * 0.9,
    height = 256,
    backgroundColor = '#000',
    cardRadius = 20,
    borderWidth = 5,
    borderColors = ['cyan', 'magenta', 'yellow', 'cyan'],
  } = props;
  const canvasPadding = 40;
  const CARD_WIDTH = width - borderWidth;
  const CARD_HEIGHT = height - borderWidth;
  return {
    width,
    height,
    canvasPadding,
    CARD_WIDTH,
    CARD_HEIGHT,
    backgroundColor,
    cardRadius,
    borderColors,
    borderWidth,
  };
};

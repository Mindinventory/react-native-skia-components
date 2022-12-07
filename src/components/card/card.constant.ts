import { Dimensions } from 'react-native';

import { miColor } from '../../themes';
import { AnimateBorderType, AnimationType } from './card.type';

const { width: ScreenWidth } = Dimensions.get('window');

export const CardConstant = {
  default: {
    animateBorder: AnimateBorderType.normal,
    animation: AnimationType.rotate,
    backgroundColor: miColor.black,
    blur: 10,
    borderColors: [miColor.cyan, miColor.magenta, miColor.yellow, miColor.cyan],
    borderWidth: 5,
    cardRadius: 20,
    duration: 3000,
    height: 256,
    padding: 40,
    perspective: 300,
    width: ScreenWidth * 0.9,
  },
  duration: {
    rotationDuration: 500,
    rotationDuration1: 1000,
    rotationDuration3: 1500,
  },
};

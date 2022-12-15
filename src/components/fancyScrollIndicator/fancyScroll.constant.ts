import { Dimensions } from 'react-native';

import { miColor } from '../../themes';

const { width: ScreenWidth } = Dimensions.get('window');

export const FancyScrollConstant = {
  default: {
    backgroundColor: miColor.black,
  },
  indicator: {
    borderColor: miColor.white,
    height: 15,
    itemColor: miColor.white,
    lineColor: miColor.white,
    speed: 0.025,
  },
  itemLayoutSize: {
    indicatorContainer: (ScreenWidth - 20) / 1.5,
    itemWidth: ScreenWidth - 20,
  },
};

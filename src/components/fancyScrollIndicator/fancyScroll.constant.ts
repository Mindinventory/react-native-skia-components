import { Dimensions } from 'react-native';

import { miColor } from '../../themes';

const { width: ScreenWidth } = Dimensions.get('window');

export const FancyScrollConstant = {
  centerSquareView: {
    subLayerOriginXDevider: 2.5,
    subLayerOriginXPlusDevider: 4,
    subLayerOriginYDevider: 2,
    subLayerSizeDevider: 2,
    subLayerXDevider: 2.5,
    subLayerYDevider: 3.5,
  },
  default: {
    backgroundColor: miColor.black,
    scrollEventThrottle: 16,
    scrollIndicatorWidthInitial: 0,
    scrollMinInitialval: 1,
  },
  indicator: {
    borderColor: miColor.white,
    height: 15,
    itemColor: miColor.white,
    lineColor: miColor.white,
    mainRoundedViewStrokeWidth: 1.5,
    mainRoundedViewXPosition: 0,
    mainRoundedViewYPosition: 0,
    radiusMultiPlier: 2,
    speed: 0.025,
    xPositionInitialiser: 0,
  },
  itemLayoutSize: {
    indicatorContainer: (ScreenWidth - 20) / 1.5,
    itemWidth: ScreenWidth - 20,
    itemWidthDevider: 1.5,
  },
  subIndicatorlayer: {
    initialXPosition: 10,
    initialYPosition: 8,
    largeIndicatorMultiplier: 0.2 * 3,
    mediumIndicatorMultiplier: 0.2 * 2,
    smallIndicatorMultiplier: 0.2 * 1,
    strockWidth: 0.9,
  },
};

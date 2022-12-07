import { Dimensions } from 'react-native';

import { miColor } from '../../themes';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

export const useFancyScrollIndicator = ({
  props,
}: {
  props: IFancyScrollIndicatorProp;
}) => {
  const itemWidth = Dimensions.get('screen').width - 20;
  const indicatorContainerWidth = itemWidth / 1.5;
  const indicatorHeight = 15;
  const indicatorRadius = indicatorHeight * 2;
  const indicatorSpeed = 0.025;
  const xPosition = 0;
  const {
    data,
    indicatorBorderColor = miColor.white,
    indicatorItemColor = miColor.gold,
    innerViewLineColor = miColor.white,
    renderItem,
  } = props;

  return {
    data,
    indicatorBorderColor,
    indicatorContainerWidth,
    indicatorHeight,
    indicatorItemColor,
    indicatorRadius,
    indicatorSpeed,
    innerViewLineColor,
    renderItem,
    xPosition,
  };
};

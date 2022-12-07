import { Dimensions } from 'react-native';

import { miColor } from '../../themes';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

export const useFancyScrollIndicator = ({
  props,
}: {
  props: IFancyScrollIndicatorProp;
}) => {
  const ItemWidth = Dimensions.get('screen').width - 20;
  const indicatorContainerWidth = ItemWidth / 1.5;
  const INDICATOR_SPEED = 0.025;
  const xPosition = 0;
  const IndicatorHeight = 15;
  const IndicatorRadius = IndicatorHeight * 2;
  const {
    data,
    indicatorBorderColor = miColor.white,
    indicatorItemColor = miColor.gold,
    innerViewLineColor = miColor.white,
    renderItem,
  } = props;

  return {
    data,
    INDICATOR_SPEED,
    indicatorBorderColor,
    indicatorContainerWidth,
    IndicatorHeight,
    indicatorItemColor,
    IndicatorRadius,
    innerViewLineColor,
    renderItem,
    xPosition,
  };
};

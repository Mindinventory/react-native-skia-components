import { Dimensions } from 'react-native';

import { useComputedValue, useValue } from '@shopify/react-native-skia';

import { miColor } from '../../themes';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

export const useFancyScrollIndicator = <T>(
  props: IFancyScrollIndicatorProp<T>
) => {
  const itemWidth = Dimensions.get('screen').width - 20;
  const indicatorContainerWidth = itemWidth / 1.5;
  const indicatorHeight = 15;
  const indicatorRadius = indicatorHeight * 2;
  const indicatorSpeed = 0.025;
  const xPosition = 0;

  const {
    indicatorBorderColor = miColor.white,
    indicatorItemColor = miColor.gold,
    innerViewLineColor = miColor.white,
    onScroll,
  } = props;

  const animationValue = useValue(0);
  const rotateValue = useValue(0);

  const translateX = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useComputedValue(() => {
      return [
        {
          translateX: animationValue.current,
        },
      ];
    }, [animationValue]);
  };

  const translate = (indexes: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useComputedValue(() => {
      return [
        {
          translateX: animationValue.current * indexes,
        },
      ];
    }, [animationValue]);
  };

  const rotationValue = useComputedValue(() => {
    return [
      {
        rotate: rotateValue.current,
      },
    ];
  }, [rotateValue]);

  const updateAnimated = (value: number) => {
    animationValue.current = value;
  };

  const updateRotateValue = (value: number) => {
    rotateValue.current = value;
  };

  return {
    animationValue,
    getAnimatedValue: animationValue.current,
    getRotateValue: rotateValue.current,
    indicatorBorderColor,
    indicatorContainerWidth,
    indicatorHeight,
    indicatorItemColor,
    indicatorRadius,
    indicatorSpeed,
    innerViewLineColor,
    onScroll,
    rotationValue,
    translate,
    translateX,
    updateAnimated,
    updateRotateValue,
    xPosition,
  };
};

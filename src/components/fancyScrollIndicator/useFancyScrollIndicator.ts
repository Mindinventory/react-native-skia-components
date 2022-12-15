import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useComputedValue, useValue } from '@shopify/react-native-skia';

import { FancyScrollConstant } from './fancyScroll.constant';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

export const useFancyScrollIndicator = <T>({
  props,
}: {
  props: IFancyScrollIndicatorProp<T>;
}) => {
  const itemWidth = FancyScrollConstant.itemLayoutSize.itemWidth;
  const indicatorContainerWidth = itemWidth / 1.5;
  const indicatorHeight = FancyScrollConstant.indicator.height;
  const indicatorRadius = indicatorHeight * 2;
  const indicatorSpeed = FancyScrollConstant.indicator.speed;
  const xPosition = 0;

  const {
    indicatorBorderColor = FancyScrollConstant.indicator.borderColor,
    indicatorItemColor = FancyScrollConstant.indicator.itemColor,
    innerViewLineColor = FancyScrollConstant.indicator.lineColor,
    onScroll,
  } = props;

  const animationValue = useValue(0);
  const rotateValue = useValue(0);

  const translateX = useComputedValue(() => {
    return [
      {
        translateX: animationValue.current,
      },
    ];
  }, [animationValue]);

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

  const updateRotateValue = (value: number) => {
    rotateValue.current = value;
  };

  const handleScroll = ({
    e,
    scrollMin,
  }: {
    e: NativeSyntheticEvent<NativeScrollEvent>;
    scrollMin: number;
  }) => {
    const { nativeEvent } = e;

    const bgWidth = nativeEvent?.contentSize?.width || 0;

    const indic =
      indicatorContainerWidth -
      indicatorContainerWidth / (props.data ?? []).length;
    const differnece = indic / scrollMin;
    const calculated =
      (nativeEvent.contentOffset.x * (indicatorContainerWidth / bgWidth)) /
      differnece;
    if (animationValue.current > calculated) {
      updateRotateValue(rotateValue.current - indicatorSpeed);
      if (rotateValue.current < 0) {
        updateRotateValue(0);
      }
    } else {
      updateRotateValue(rotateValue.current + indicatorSpeed);
    }

    animationValue.current = calculated;
    onScroll && onScroll(e);
  };

  return {
    animationValue,
    getAnimatedValue: animationValue.current,
    getRotateValue: rotateValue.current,
    handleScroll,
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
    updateRotateValue,
    xPosition,
  };
};

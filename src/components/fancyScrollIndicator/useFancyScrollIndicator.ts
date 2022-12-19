import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useComputedValue, useValue } from '@shopify/react-native-skia';

import { useMiUiContext } from '../../context';
import { FancyScrollConstant } from './fancyScroll.constant';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

export const useFancyScrollIndicator = <T>({
  props,
}: {
  props: IFancyScrollIndicatorProp<T>;
}) => {
  const { styles } = useMiUiContext();

  const itemWidth = FancyScrollConstant.itemLayoutSize.itemWidth;
  const indicatorContainerWidth =
    itemWidth / FancyScrollConstant.itemLayoutSize.itemWidthDevider;
  const indicatorHeight = FancyScrollConstant.indicator.height;
  const indicatorRadius =
    indicatorHeight * FancyScrollConstant.indicator.radiusMultiPlier;
  const indicatorSpeed = FancyScrollConstant.indicator.speed;
  const xPosition = FancyScrollConstant.indicator.xPositionInitialiser;

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

  //MARK: - Custom error
  const throwErrorMessage = () => {
    throw new Error('Currently we are support for only horizontal direction');
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
    scrollEventThrottle: FancyScrollConstant.default.scrollEventThrottle,
    styles,
    throwErrorMessage,
    translate,
    translateX,
    updateRotateValue,
    xPosition,
  };
};

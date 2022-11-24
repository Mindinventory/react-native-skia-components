import { Dimensions } from 'react-native';

import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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
    animation = 'NONE',
    animateBorder = 'NORMAL',
    style,
    duration = 3000,
  } = props;
  const canvasPadding = 40;
  const CARD_WIDTH = width - borderWidth;
  const CARD_HEIGHT = height - borderWidth;

  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const scale = useSharedValue(1);

  const rotatePoint = useSharedValue(0);

  const zIndex = 300;

  const cardStyle = useAnimatedStyle(() => {
    const rotateXValue = `${rotateX.value}deg`;
    const rotateYValue = `${rotateY.value}deg`;
    const scaleValue = scale.value;

    return {
      transform: [
        {
          perspective: 300,
        },
        { rotateX: rotateXValue },
        { rotateY: rotateYValue },
        { scale: scaleValue },
      ],
    };
  }, [rotateX.value, rotateY.value, scale.value]);

  useDerivedValue(() => {
    if (animation !== 'NONE') {
      if (rotatePoint.value === 0) {
        rotatePoint.value = withTiming(1, {
          duration: 500,
          easing: Easing.linear,
        });
      } else if (rotatePoint.value === 1) {
        rotatePoint.value = withTiming(2, {
          duration: 500,
          easing: Easing.linear,
        });
      } else if (rotatePoint.value === 2) {
        rotatePoint.value = withTiming(3, {
          duration: 500,
          easing: Easing.linear,
        });
      } else if (rotatePoint.value === 3) {
        rotatePoint.value = withTiming(0, {
          duration: 1500,
          easing: Easing.linear,
        });
      }
    }

    if (animation === 'ROTATE') {
      rotateX.value = interpolate(
        rotatePoint.value,
        [0, 1, 2, 3, 4],
        [6, 6, -6, -6],
        Extrapolate.CLAMP
      );
      rotateY.value = interpolate(
        rotatePoint.value,
        [0, 1, 2, 3, 4],
        [-6, 6, 6, -6],
        Extrapolate.CLAMP
      );
    } else if (animation === 'BOUNCE') {
      rotateX.value = withTiming(0, {
        duration: 1000,
        easing: Easing.bounce,
      });
      rotateY.value = withTiming(0, {
        duration: 1000,
        easing: Easing.bounce,
      });

      scale.value = interpolate(
        rotatePoint.value,
        [0, 1, 2, 3, 4],
        [1, 1.05, 0.98, 1.05],
        Extrapolate.CLAMP
      );
    } else {
      rotateX.value = withTiming(0, {
        duration: 1000,
        easing: Easing.linear,
      });
      rotateY.value = withTiming(0, {
        duration: 1000,
        easing: Easing.linear,
      });
      scale.value = withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      });
    }
  }, [rotatePoint.value, animation]);

  return {
    animateBorder,
    animation,
    backgroundColor,
    blur,
    borderColors,
    borderWidth,
    canvasPadding,
    CARD_HEIGHT,
    CARD_WIDTH,
    cardRadius,
    cardStyle,
    duration,
    height,
    style,
    width,
    zIndex,
  };
};

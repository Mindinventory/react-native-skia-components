import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { CardConstant } from './card.constant';
import { AnimationType, CardProps } from './card.type';
import { useMiUiContext } from '../../context';

export const useCard = ({ props }: { props: CardProps }) => {
  const { styles } = useMiUiContext();

  const {
    width = CardConstant.default.width,
    height = CardConstant.default.height,
    backgroundColor = CardConstant.default.backgroundColor,
    cardRadius = CardConstant.default.cardRadius,
    borderWidth = CardConstant.default.borderWidth,
    borderColors = CardConstant.default.borderColors,
    blur = CardConstant.default.blur,
    animation = CardConstant.default.animation,
    animateBorder = CardConstant.default.animateBorder,
    style,
    duration = CardConstant.default.duration,
  } = props;

  const canvasPadding = CardConstant.default.padding;

  const CARD_WIDTH = width - borderWidth;
  const CARD_HEIGHT = height - borderWidth;

  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const scale = useSharedValue(1);

  const rotatePoint = useSharedValue(0);

  const zIndex = CardConstant.default.perspective;

  const cardStyle = useAnimatedStyle(() => {
    const rotateXValue = `${rotateX.value}deg`;
    const rotateYValue = `${rotateY.value}deg`;
    const scaleValue = scale.value;

    return {
      transform: [
        {
          perspective: CardConstant.default.perspective,
        },
        { rotateX: rotateXValue },
        { rotateY: rotateYValue },
        { scale: scaleValue },
      ],
    };
  }, [rotateX.value, rotateY.value, scale.value]);

  useDerivedValue(() => {
    if (animation !== AnimationType.none) {
      if (rotatePoint.value === 0) {
        rotatePoint.value = withTiming(1, {
          duration: CardConstant.duration.rotationDuration,
          easing: Easing.linear,
        });
      } else if (rotatePoint.value === 1) {
        rotatePoint.value = withTiming(2, {
          duration: CardConstant.duration.rotationDuration,
          easing: Easing.linear,
        });
      } else if (rotatePoint.value === 2) {
        rotatePoint.value = withTiming(3, {
          duration: CardConstant.duration.rotationDuration,
          easing: Easing.linear,
        });
      } else if (rotatePoint.value === 3) {
        rotatePoint.value = withTiming(0, {
          duration: CardConstant.duration.rotationDuration3,
          easing: Easing.linear,
        });
      }
    }

    if (animation === AnimationType.rotate) {
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
    } else if (animation === AnimationType.bounce) {
      rotateX.value = withTiming(0, {
        duration: CardConstant.duration.rotationDuration1,
        easing: Easing.bounce,
      });
      rotateY.value = withTiming(0, {
        duration: CardConstant.duration.rotationDuration1,
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
        duration: CardConstant.duration.rotationDuration1,
        easing: Easing.linear,
      });
      rotateY.value = withTiming(0, {
        duration: CardConstant.duration.rotationDuration1,
        easing: Easing.linear,
      });
      scale.value = withTiming(1, {
        duration: CardConstant.duration.rotationDuration1,
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
    props,
    style,
    styles,
    width,
    zIndex,
  };
};

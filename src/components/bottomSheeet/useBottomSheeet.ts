import { useEffect } from 'react';
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';

import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import {
  AnimatedStyleProp,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { BottomSheeetConstant } from './bottomSheeet.constant';
import { BottomSheeetProps, DisplayEnum } from './bottomSheeet.type';
import { useMiUiContext } from '../../context';

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 800,
};

const { height } = Dimensions.get('window');

export const useBottomSheeet = ({ props }: { props: BottomSheeetProps }) => {
  const { styles } = useMiUiContext();
  const top = useSharedValue(height);
  const display = useSharedValue(DisplayEnum.displayTypeNone);

  const {
    isVisible = BottomSheeetConstant.default.isVisible,
    showHandle = BottomSheeetConstant.default.showHandle,
    onClose,
  } = props;
  const animatedStyles = useAnimatedStyle<
    AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>
  >(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  const rootViewStyle = useAnimatedStyle<
    AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>
  >(() => {
    return {
      display: display.value,
    };
  });

  const gestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive(event, context: any) {
        top.value = context.startTop + event.translationY;
      },
      onEnd(event, context: any) {
        if (top.value > height / 2 + 200) {
          top.value = height;
          display.value = DisplayEnum.displayTypeNone;
        } else {
          top.value = context.startTop + event.translationY;
        }
      },
      onStart(_, context: any) {
        context.startTop = top.value;
      },
    });

  useEffect(() => {
    if (isVisible) {
      top.value = withSpring(height / 2, SPRING_CONFIG);
      display.value = DisplayEnum.displayTypeFlex;
      // setIsBottomSheetOpen(true);
    }
  }, [display, isVisible, top]);

  const onPressBackDrop = () => {
    top.value = withSpring(height, SPRING_CONFIG);
    display.value = DisplayEnum.displayTypeNone;
    onClose && onClose();
  };

  return {
    animatedStyles,
    gestureHandler,
    isVisible,
    onPressBackDrop,
    rootViewStyle,
    showHandle,
    styles,
  };
};

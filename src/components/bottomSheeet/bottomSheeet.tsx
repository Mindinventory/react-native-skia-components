import React from 'react';
import {
  Button,
  Dimensions,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {
  GestureHandlerRootView,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  AnimatedStyleProp,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import CustomBottomSheet from './customBottomSheet';
import { useBottomSheeet } from './useBottomSheeet';

const { height } = Dimensions.get('window');

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const BottomSheeet = () => {
  const { styles } = useBottomSheeet();
  const top = useSharedValue(height);

  const animatedStyles = useAnimatedStyle<
    AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>
  >(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });
  const gestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive(event, context: any) {
        top.value = context.startTop + event.translationY;
      },
      onEnd() {
        if (top.value > height / 2 + 200) {
          top.value = height;
        } else {
          top.value = height / 2;
        }
      },
      onStart(_, context: any) {
        context.startTop = top.value;
      },
    });
  return (
    <>
      <GestureHandlerRootView>
        <View style={styles.bottomSheeetStyle.container}>
          <Button
            title="Open"
            onPress={() => (top.value = withSpring(height / 2, SPRING_CONFIG))}
          />
        </View>
        <CustomBottomSheet
          animatedStyles={animatedStyles}
          gestureHandler={gestureHandler}
        />
      </GestureHandlerRootView>
    </>
  );
};

export default BottomSheeet;

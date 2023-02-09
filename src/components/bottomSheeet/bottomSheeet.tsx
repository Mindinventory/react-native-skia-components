import React from 'react';
import { Button, Dimensions, Text, View } from 'react-native';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });
  const gestureHandler = useAnimatedGestureHandler({
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > height / 2 + 200) {
        top.value = height;
      } else {
        top.value = height / 2;
      }
    },
    onStart(_, context) {
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
        {/* <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              styles.bottomSheeetStyle.bottomSheetContainer,
              animatedStyles,
            ]}
          >
            <Text>Hello</Text>
          </Animated.View>
        </PanGestureHandler> */}
      </GestureHandlerRootView>
    </>
  );
};

export default BottomSheeet;

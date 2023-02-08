import React from 'react';
import { Button, Dimensions, View } from 'react-native';

import {
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
  const gestureHandler = useAnimatedGestureHandler({
    onActive(event) {
      top.value = event.translationY;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });
  return (
    <>
      <View style={styles.bottomSheeetStyle.container}>
        <Button
          title="Open"
          onPress={() => (top.value = withSpring(height / 2, SPRING_CONFIG))}
        />
      </View>
      <CustomBottomSheet
        gestureHandler={() => gestureHandler}
        animatedStyles={animatedStyles}
      />
    </>
  );
};

export default BottomSheeet;

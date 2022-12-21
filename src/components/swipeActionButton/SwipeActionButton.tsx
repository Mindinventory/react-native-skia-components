import React from 'react';
import { Pressable, View } from 'react-native';

import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SwipeActionButton = () => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withRepeat(withTiming(200, { duration: 500 }), -1, true),
      },
    ],
  }));

  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 35,
        height: 70,
        padding: 2,
        width: 200,
      }}
    >
      <AnimatedPressable
        style={[
          {
            backgroundColor: 'red',
            borderRadius: 35,
            height: '100%',
            width: 70,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};
export default SwipeActionButton;

import React, { FC, useState } from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

interface SwipeActionButtonInterface {
  title: string;
  titleStyles: StyleProp<TextStyle>;
  titleShown?: boolean;
  titleAnimEnabled: boolean;
  onSwipeStart: () => void;
  onSwipeEnd: () => void;
}

const SwipeActionButton: FC<SwipeActionButtonInterface> = ({
  title,
  titleStyles,
  titleShown = true,
  titleAnimEnabled = true,
  onSwipeStart,
  onSwipeEnd,
}) => {
  const [toggled, setToggled] = useState(false);
  const X = useSharedValue(0);

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive(event, context: any) {
      let newValue = 0;

      if (context?.completed) {
        newValue = H_SWIPE_RANGE + event.translationX;
      } else {
        X.value = event.translationX;
      }
      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },

    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(setToggled)(false);
        runOnJS(onSwipeStart)();
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(setToggled)(true);
        runOnJS(onSwipeEnd)();
      }
    },

    onStart(_, context) {
      context.completed = toggled;
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];

  const AnimatedStyles = {
    colorWave: useAnimatedStyle(() => {
      return {
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
        width: H_WAVE_RANGE + X.value,
      };
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,

          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ['#06d6a0', '#fff']
        ),
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }),
  };

  return (
    <View style={styles.swipeContainer}>
      <AnimatedLinearGradient
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1.0, y: 0.5 }}
        colors={['#06d6a0', '#1b9aaa']}
        style={[styles.colorWave, AnimatedStyles.colorWave]}
      />
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View
          style={[styles.swipeablePin, AnimatedStyles.swipeable]}
        />
      </PanGestureHandler>
      {titleShown && (
        <Animated.Text
          style={[
            styles.swipeText,
            titleAnimEnabled && AnimatedStyles.swipeText,
            titleStyles,
          ]}
        >
          {title}
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontFamily: 'Gill Sans',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  colorWave: {
    backgroundColor: '#1b9aaa',
    borderRadius: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    left: 0,
    position: 'absolute',
  },
  linearGradient: {
    borderRadius: 5,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  mainView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  swipeablePin: {
    alignItems: 'center',
    borderRadius: SWIPEABLE_DIMENSIONS,
    height: SWIPEABLE_DIMENSIONS,
    justifyContent: 'center',
    left: BUTTON_PADDING,
    position: 'absolute',
    width: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
  },

  swipeContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: BUTTON_HEIGHT,
    display: 'flex',
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    padding: BUTTON_PADDING,
    width: BUTTON_WIDTH,
  },
  swipeText: {
    alignSelf: 'center',
    color: '#1b9aaa',
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 2,
  },
});

export default SwipeActionButton;

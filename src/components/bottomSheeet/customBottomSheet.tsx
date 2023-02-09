import React from 'react';
import { StyleSheet } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import type { CustomBottomSheetProps } from './bottomSheeet.type';
import { miColor } from '../../themes';

const CustomBottomSheet = ({
  gestureHandler,
  animatedStyles,
  children,
}: CustomBottomSheetProps) => {
  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.bottomSheetContainer, animatedStyles]}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: miColor.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    elevation: 5,
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
    shadowColor: miColor.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

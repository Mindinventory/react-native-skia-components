import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

interface CustomBottomSheetProps {
  animatedStyles: any;
  gestureHandler: () => void;
}

const CustomBottomSheet = ({
  gestureHandler,
  animatedStyles,
}: CustomBottomSheetProps) => {
  // const gestureHandler = useAnimatedGestureHandler({});
  return (
    <>
      {/* <GestureHandlerRootView> */}
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.bottomSheetContainer, animatedStyles]}>
          <Text>Hello</Text>
        </Animated.View>
      </PanGestureHandler>
      {/* </GestureHandlerRootView> */}
    </>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    elevation: 5,
    justifyContent: 'center',
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

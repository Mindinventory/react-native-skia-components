import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import type { BottomSheeetProps } from './bottomSheeet.type';
import CustomBottomSheet from './customBottomSheet';
import { useBottomSheeet } from './useBottomSheeet';

const BottomSheeet = (props: BottomSheeetProps) => {
  const { animatedStyles, gestureHandler, width, height, rootViewStyle } =
    useBottomSheeet({
      props,
    });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'rgba(0,0,0,0.4)',
          height: height,
          position: 'absolute',
          width: width,
        },
        rootViewStyle,
      ]}
    >
      <GestureHandlerRootView
        style={{
          height: height,
          width: width,
        }}
      >
        <CustomBottomSheet
          animatedStyles={animatedStyles}
          gestureHandler={gestureHandler}
          children={props.children}
        />
      </GestureHandlerRootView>
    </Animated.View>
  );
};

export default BottomSheeet;

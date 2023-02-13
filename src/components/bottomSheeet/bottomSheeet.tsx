import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import type { BottomSheeetProps } from './bottomSheeet.type';
import CustomBottomSheet from './customBottomSheet';
import { useBottomSheeet } from './useBottomSheeet';

const BottomSheeet = (props: BottomSheeetProps) => {
  const {
    animatedStyles,
    gestureHandler,

    rootViewStyle,
    styles,
    showHandle,
    onPressBackDrop,
  } = useBottomSheeet({
    props,
  });

  return (
    <Animated.View
      style={[styles.bottomSheeetStyle.bottomSheetWrapper, rootViewStyle]}
    >
      <TouchableWithoutFeedback
        style={styles.bottomSheeetStyle.gestureHandlerRootViewStyle}
        onPress={onPressBackDrop}
      >
        <GestureHandlerRootView
          style={styles.bottomSheeetStyle.gestureHandlerRootViewStyle}
        >
          <CustomBottomSheet
            animatedStyles={animatedStyles}
            gestureHandler={gestureHandler}
            children={props.children}
            showHandle={showHandle}
          />
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default BottomSheeet;

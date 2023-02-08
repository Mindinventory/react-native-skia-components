import React from 'react';
import { Animated, Pressable } from 'react-native';

import { useFlipView } from './useFlipView';
import type { FlipCardPropType, RefType } from '../types/flipView.type';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 *
 * @param props FlipCardPropType
 * @param forwardRef RefType
 * @returns React.ForwardRefRenderFunction<RefType, FlipCardPropType>
 */

const FlipView: React.ForwardRefRenderFunction<RefType, FlipCardPropType> = (
  props,
  forwardRef
) => {
  const { style, scaling, cardATransform, cardBTransform, styles, flip } =
    useFlipView({ forwardRef, props });

  if (!props.frontView) {
    throw new Error('frontView Element is not available');
  }

  if (!props.backView) {
    throw new Error('backView Element is not available');
  }

  return (
    <Animated.View style={[style, scaling]}>
      <AnimatedPressable
        style={[styles.cardContainer, cardATransform]}
        onPress={flip}
      >
        {props.frontView}
      </AnimatedPressable>
      <Animated.View style={[styles.cardContainer, cardBTransform]}>
        {props.backView}
      </Animated.View>
    </Animated.View>
  );
};

export default React.memo(React.forwardRef(FlipView));

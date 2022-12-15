import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import type { FlipCardPropType, RefType } from './flipView.type';
import { useFlipView } from './useFlipView';

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
  const { style, sides, scaling, cardATransform, cardBTransform } = useFlipView(
    { forwardRef, props }
  );

  return (
    <Animated.View style={[style, scaling]}>
      <Animated.View style={[styles.cardContainer, cardATransform]}>
        {sides[0]}
      </Animated.View>
      <Animated.View style={[styles.cardContainer, cardBTransform]}>
        {sides[1]}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default React.memo(React.forwardRef(FlipView));

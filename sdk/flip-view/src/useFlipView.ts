import { Ref, useCallback, useImperativeHandle, useRef } from 'react';
import { Animated } from 'react-native';

import { FlipViewConstant } from './flipView.constant';
import { flipViewStyle } from './flipView.style';
import {
  FlipCardPropType,
  FlipDirectionType,
  RefType,
} from '../types/flipView.type';

let isFlip: boolean = false;

interface FlipView {
  forwardRef: Ref<RefType> | undefined;
  props: FlipCardPropType;
}

export const useFlipView = ({ props, forwardRef }: FlipView) => {
  const styles = flipViewStyle();

  const {
    duration = FlipViewConstant.default.duration,
    flipDirection = FlipViewConstant.default.flipDirection,
    flipZoom = FlipViewConstant.default.flipZoom,
    perspective = FlipViewConstant.default.perspective,
    style,
  } = props;

  const side = 0;

  const progress = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.ValueXY({ x: 50, y: 50 })).current;
  const zoom = useRef(new Animated.Value(0)).current;

  const flip = useCallback(() => {
    Animated.parallel([
      Animated.timing(progress, {
        duration,
        toValue: isFlip ? 0 : 100,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(zoom, {
          duration: duration / 3,
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(zoom, {
          duration: duration / 3,
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.timing(zoom, {
          duration: duration / 3,
          toValue: 0,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(rotation, {
        duration: duration,
        toValue: {
          x: isFlip ? 50 : 100,
          y: isFlip ? 50 : 100,
        },
        useNativeDriver: true,
      }),
    ]).start();
    isFlip = !isFlip;
  }, [duration, progress, rotation, zoom]);

  const getCardATransformation = useCallback(() => {
    const sideAOpacity = progress.interpolate({
      extrapolate: 'clamp',
      inputRange: [50, 51],
      outputRange: [100, 0],
    });

    const sideATransform: any = {
      opacity: sideAOpacity,
      transform: [{ perspective: perspective }],
      zIndex: side === 0 ? 1 : 0,
    };

    if (flipDirection === FlipDirectionType.vertical) {
      const aXRotation = rotation.x.interpolate({
        extrapolate: 'clamp',
        inputRange: [0, 50, 100, 150],
        outputRange: ['-180deg', '0deg', '180deg', '0deg'],
      });
      sideATransform.transform.push({ rotateX: aXRotation });
      return sideATransform;
    } else {
      const aYRotation = rotation.y.interpolate({
        extrapolate: 'clamp',
        inputRange: [0, 50, 100, 150],
        outputRange: ['-180deg', '0deg', '180deg', '0deg'],
      });
      sideATransform.transform.push({ rotateY: aYRotation });
      return sideATransform;
    }
  }, [flipDirection, perspective, progress, rotation.x, rotation.y]);

  const cardATransform = getCardATransformation();

  const getCardBTransformation = useCallback(() => {
    const sideBOpacity = progress.interpolate({
      extrapolate: 'clamp',
      inputRange: [50, 51],
      outputRange: [0, 100],
    });

    const sideBTransform: any = {
      opacity: sideBOpacity,
      transform: [{ perspective: -1 * perspective }],
      zIndex: side === 0 ? 0 : 1,
    };
    if (flipDirection === FlipDirectionType.vertical) {
      const bXRotation = rotation.x.interpolate({
        extrapolate: 'clamp',
        inputRange: [0, 50, 100, 150],
        outputRange: ['0deg', '-180deg', '-360deg', '180deg'],
      });
      sideBTransform.transform.push({ rotateX: bXRotation });
      return sideBTransform;
    } else {
      const bYRotation = rotation.y.interpolate({
        extrapolate: 'clamp',
        inputRange: [0, 50, 100, 150],
        outputRange: ['0deg', '180deg', '0deg', '-180deg'],
      });
      sideBTransform.transform.push({ rotateY: bYRotation });
      return sideBTransform;
    }
  }, [flipDirection, perspective, progress, rotation.x, rotation.y]);

  const cardBTransform = getCardBTransformation();

  const scaling = {
    transform: [
      {
        scale: zoom.interpolate({
          extrapolate: 'clamp',
          inputRange: [0, 100],
          outputRange: [1, 1 + flipZoom],
        }),
      },
    ],
  };

  useImperativeHandle(forwardRef, () => ({ flip, isFlip }), [flip]);

  return {
    cardATransform,
    cardBTransform,
    flip,
    isFlip,
    props,
    scaling,
    style,
    styles,
  };
};

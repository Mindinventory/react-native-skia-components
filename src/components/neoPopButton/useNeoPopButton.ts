import { useState } from 'react';

import {
  Easing,
  Skia,
  useComputedValue,
  useTiming,
  useValue,
} from '@shopify/react-native-skia';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { useMiUiContext } from '../../context';
import { miColor } from '../../themes';
import type { NeoPopButtonProps } from './neoPopButton.type';

const DEPTH = 10;
const HEIGHT = 50;
const SHADOW_HEIGHT = 10;
const WIDTH = 150;

export const useNeoPopButton = (props: NeoPopButtonProps) => {
  const { styles } = useMiUiContext();

  const {
    backgroundColor = miColor.lightYellowShade,
    bottomShadowColor = miColor.black,
    depth = DEPTH,
    height: propHeight = HEIGHT,
    isFloating = true,
    shadowHeight = SHADOW_HEIGHT,
    sideShadowColor = miColor.darkYellowShade,
    textStyle,
    title = 'Pay',
    width: propWidth = WIDTH,
    titleSize = 10,
    floatAnimation = true,
    duration = 800,
  } = props;

  let height = propHeight * 1.5;
  let width = propWidth * 1.5;

  const [shadowTranslate, setShadowTranslate] = useState(0);
  const [pressed, setPressed] = useState(false);

  const translate = useTiming(
    {
      from: 0,
      loop: true,
      to: floatAnimation ? 11 : 0,
      yoyo: true,
    },
    {
      duration: duration,
      easing: Easing.linear,
    }
  );

  const translateY = useValue(0);

  const shadowPath = Skia.Path.Make();
  shadowPath.moveTo(25, height - shadowHeight);
  shadowPath.lineTo(22, height + shadowTranslate);
  shadowPath.lineTo(width - 20, height + shadowTranslate);
  shadowPath.lineTo(width - 24, height - shadowHeight);

  const path = Skia.Path.Make();
  path.moveTo(0, height - depth - shadowHeight);
  path.lineTo(width, height - depth - shadowHeight);
  path.lineTo(width - 25, 0);
  path.lineTo(25, 1);
  path.close();

  const path2 = Skia.Path.Make();
  path2.moveTo(0, height - depth - shadowHeight);
  path2.lineTo(15, height - depth - shadowHeight);
  path2.lineTo(35, 0);
  path2.lineTo(25, 0);
  path2.close();

  const depthPath = Skia.Path.Make();
  depthPath.moveTo(0, height - depth - shadowHeight);
  depthPath.lineTo(6, height - depth - shadowHeight + depth);
  depthPath.lineTo(width - 6, height - depth - shadowHeight + depth);
  depthPath.lineTo(width, height - depth - shadowHeight);

  const depthPath2 = Skia.Path.Make();
  depthPath2.moveTo(0, height);
  depthPath2.lineTo(25, 100);
  depthPath2.lineTo(35, 0);
  depthPath2.lineTo(25, 45);
  depthPath2.close();

  const nonFloatingDepthPath = Skia.Path.Make();
  nonFloatingDepthPath.moveTo(0, height - depth - shadowHeight);
  nonFloatingDepthPath.lineTo(
    6,
    height - depth - shadowHeight + depth - translate.current
  );
  nonFloatingDepthPath.lineTo(
    width - 6,
    height - depth - shadowHeight + depth - translate.current
  );
  nonFloatingDepthPath.lineTo(width, height - depth - shadowHeight);

  const onPressStart = () => {
    setPressed(true);
    translateY.current = isFloating ? shadowHeight : depth;
    setShadowTranslate(-shadowHeight);
  };

  const onPressEnd = () => {
    setPressed(false);
    translateY.current = 0;
    setShadowTranslate(0);
  };

  const textTransform = useSharedValue(0);

  const transform = useComputedValue(() => {
    textTransform.value = translate.current;
    return [
      { translateY: pressed ? 10 : !floatAnimation ? 0 : translate.current },
    ];
  }, [translate, pressed, floatAnimation]);

  const textTransformStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pressed ? 0 : textTransform.value - 12,
        },
        { rotateX: '25deg' },
        { rotateZ: '0deg' },
      ],
    };
  }, [textTransform, pressed]);

  return {
    backgroundColor,
    bottomShadowColor,
    depth,
    depthPath,
    depthPath2,
    floatAnimation,
    height,
    isFloating,
    nonFloatingDepthPath,
    onPressEnd,
    onPressStart,
    path,
    path2,
    props,
    shadowHeight,
    shadowPath,
    shadowTranslate,
    sideShadowColor,
    styles,
    textStyle,
    textTransformStyle,
    title,
    titleSize,
    transform,
    translate,
    width,
  };
};

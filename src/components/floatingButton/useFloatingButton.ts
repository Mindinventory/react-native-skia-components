import { Skia } from '@shopify/react-native-skia';
import { useState } from 'react';
import type { FloatingButtonProps } from './floatingButton.type';

export const useFloatingButton = (props: FloatingButtonProps) => {
  const {
    backgroundColor = 'rgba(250, 226, 46,1)',
    bottomShadowColor = 'rgba(0, 0, 0,1)',
    depth = 15,
    height: propHeight = 200,
    isFloating = true,
    shadowHeight = 15,
    sideShadowColor = 'rgba(195, 161, 60,1)',
    textStyle,
    title = 'Pay',
    width: propWidth = 300,
  } = props;

  let height = propHeight * 1.5;
  let width = propWidth * 1.5;

  const [translate, setTranslate] = useState(0);
  const [shadowTranslate, setshadowTranslate] = useState(0);

  const onPressStart = () => {
    setTranslate(isFloating ? shadowHeight : depth);
    setshadowTranslate(-shadowHeight);
  };

  const onPressEnd = () => {
    setTranslate(0);
    setshadowTranslate(0);
  };

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

  const depthPath = Skia.Path.Make();
  depthPath.moveTo(0, height - depth - shadowHeight);
  depthPath.lineTo(6, height - depth - shadowHeight + depth);
  depthPath.lineTo(width - 6, height - depth - shadowHeight + depth);
  depthPath.lineTo(width, height - depth - shadowHeight);

  const nonFloatingDepthPath = Skia.Path.Make();
  nonFloatingDepthPath.moveTo(0, height - depth - shadowHeight);
  nonFloatingDepthPath.lineTo(
    6,
    height - depth - shadowHeight + depth - translate
  );
  nonFloatingDepthPath.lineTo(
    width - 6,
    height - depth - shadowHeight + depth - translate
  );
  nonFloatingDepthPath.lineTo(width, height - depth - shadowHeight);

  return {
    backgroundColor,
    bottomShadowColor,
    depth,
    depthPath,
    height,
    isFloating,
    nonFloatingDepthPath,
    onPressEnd,
    onPressStart,
    path,
    shadowHeight,
    shadowPath,
    shadowTranslate,
    sideShadowColor,
    textStyle,
    title,
    translate,
    width,
  };
};

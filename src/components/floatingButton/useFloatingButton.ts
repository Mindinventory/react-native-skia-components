import { useState } from 'react';

import { Skia } from '@shopify/react-native-skia';

import { miColor } from '../../themes';
import type { FloatingButtonProps } from './floatingButton.type';

// const BOTTOM_SHADOW_SKEW_H_MARGIN = 26;
// const BOTTOM_SHADOW_SKEW_Z_INDEX_DEPTH = 22;
const DEPTH = 10;
const HEIGHT = 200;
const SHADOW_HEIGHT = 10;
// const SKEW_DEPTH_H_MARGIN = 6;
// const SKEW_H_MARGIN = 24;
const WIDTH = 300;

export const useFloatingButton = (props: FloatingButtonProps) => {
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

  // const SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT = height - depth - shadowHeight;
  // const SUBTRACT_DEPTH_TRANSLATE = depth - translate;
  // const SUBTRACT_HEIGHT_SHADOW_HEIGHT = height - shadowHeight;
  // const TOTAL_HEIGHT_SHADOW_TRANSLATE = height - shadowTranslate;

  // const shadowPath = Skia.Path.Make();
  // shadowPath.moveTo(BOTTOM_SHADOW_SKEW_H_MARGIN, SUBTRACT_HEIGHT_SHADOW_HEIGHT);
  // shadowPath.lineTo(
  //   BOTTOM_SHADOW_SKEW_Z_INDEX_DEPTH,
  //   TOTAL_HEIGHT_SHADOW_TRANSLATE
  // );
  // shadowPath.lineTo(
  //   width - BOTTOM_SHADOW_SKEW_Z_INDEX_DEPTH,
  //   TOTAL_HEIGHT_SHADOW_TRANSLATE
  // );
  // shadowPath.lineTo(
  //   width - BOTTOM_SHADOW_SKEW_H_MARGIN,
  //   SUBTRACT_HEIGHT_SHADOW_HEIGHT
  // );

  // const path = Skia.Path.Make();
  // path.moveTo(0, SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT);
  // path.lineTo(width, SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT);
  // path.lineTo(width - SKEW_H_MARGIN, 0);
  // path.lineTo(SKEW_H_MARGIN, 1);
  // path.close();

  // const depthPath = Skia.Path.Make();
  // depthPath.moveTo(0, SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT);
  // depthPath.lineTo(
  //   SKEW_DEPTH_H_MARGIN,
  //   SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT + depth
  // );
  // depthPath.lineTo(
  //   width - SKEW_DEPTH_H_MARGIN,
  //   SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT + depth
  // );
  // depthPath.lineTo(width, SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT);

  // const nonFloatingDepthPath = Skia.Path.Make();
  // nonFloatingDepthPath.moveTo(0, SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT);
  // nonFloatingDepthPath.lineTo(
  //   6,
  //   SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT + SUBTRACT_DEPTH_TRANSLATE
  // );
  // nonFloatingDepthPath.lineTo(
  //   width - 6,
  //   SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT + SUBTRACT_DEPTH_TRANSLATE
  // );
  // nonFloatingDepthPath.lineTo(width, SUBTRACT_HEIGHT_DEPTH_SHADOW_HEIGHT);

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

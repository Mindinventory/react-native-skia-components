import { useState } from 'react';

import { useMiUiContext } from '../../context';
import { FloatingButtonConstant } from './floatingButton.constant';
import type { FloatingButtonProps } from './floatingButton.type';

export const useFloatingButton = (props: FloatingButtonProps) => {
  const { styles } = useMiUiContext();

  const {
    backgroundColor = FloatingButtonConstant.default.backgroundColor,
    bottomShadowColor = FloatingButtonConstant.default.height,
    height = FloatingButtonConstant.default.height,
    sideShadowColor = FloatingButtonConstant.default.sideShadowColor,
    textStyle,
    title = FloatingButtonConstant.default.title,
    titleSize = FloatingButtonConstant.default.titleSize,
    width = FloatingButtonConstant.default.width,
  } = props;

  const buttonWidth = width;
  const buttonHeight = height;
  const canvasButtonWidth =
    buttonWidth + FloatingButtonConstant.default.buttonRightSideWidth;
  const canvasButtonHeight =
    buttonHeight + FloatingButtonConstant.default.buttonRightSideWidth;

  const TEXT_POSITION = buttonWidth / 2 - titleSize;

  const [x] = useState<number>(-20);
  const [y] = useState<number>(-20);
  const [animatedWidth, setAnimatedWidth] = useState<number>(0);
  const [animatedX, setAnimatedX] = useState<number>(0);
  const [animatedHeight, setAnimatedHeight] = useState<number>(0);
  const [animatedY, setAnimatedY] = useState<number>(0);
  const [textPosition, setTextPosition] = useState({
    x: TEXT_POSITION,
    y: TEXT_POSITION / 2,
  });
  const [boxShadow, setBoxShadow] = useState(0);

  const defaultFakeBoxTransition = () => {
    return {
      transitionX: 0,
      transitionY: 0,
    };
  };

  const [{ transitionX, transitionY }, updateBoxShadow] = useState(
    defaultFakeBoxTransition()
  );

  const onPressButton = () => {
    updateBoxShadow(startFakeBoxTransition);
    setAnimatedWidth(50);
    setAnimatedX(40);
    setAnimatedHeight(50);
    setAnimatedY(40);

    setTextPosition({
      x: textPosition.x - x,
      y: textPosition.y - x,
    });
    setBoxShadow(10);
  };

  const onPressOut = () => {
    updateBoxShadow(defaultFakeBoxTransition);
    setAnimatedWidth(0);
    setAnimatedX(0);
    setAnimatedY(0);
    setAnimatedHeight(0);
    setTextPosition({
      x: textPosition.x + x,
      y: textPosition.y + x,
    });
    setBoxShadow(0);
  };

  const startFakeBoxTransition = () => {
    return {
      transitionX: -x,
      transitionY: -y,
    };
  };

  return {
    animatedHeight,
    animatedWidth,
    animatedX,
    animatedY,
    backgroundColor,
    bottomShadowColor,
    boxShadow,
    buttonHeight,
    buttonWidth,
    canvasButtonHeight,
    canvasButtonWidth,
    height,
    onPressButton,
    onPressOut,
    props,
    sideShadowColor,
    styles,
    textStyle,
    title,
    titleSize,
    transitionX,
    transitionY,
    width,
    x,
    y,
  };
};

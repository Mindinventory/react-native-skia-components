import { useState } from 'react';

import { useValue } from '@shopify/react-native-skia';

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
    strokeColor = FloatingButtonConstant.default.strokeColor,
  } = props;

  const buttonType = !props.buttonType
    ? FloatingButtonConstant.default.buttonType
    : props.buttonType;

  const buttonWidth = width;
  const buttonHeight = height;
  const canvasButtonWidth =
    buttonWidth + FloatingButtonConstant.default.buttonRightSideWidth;
  const canvasButtonHeight =
    buttonHeight + FloatingButtonConstant.default.buttonRightSideWidth;

  const TEXT_POSITION = buttonWidth / 2 - titleSize;

  const x = -20;
  const y = -20;
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

  const pressed = useValue(false);

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
    pressed.current = true;
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
    pressed.current = false;
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
    buttonType,
    buttonWidth,
    canvasButtonHeight,
    canvasButtonWidth,
    height,
    onPressButton,
    onPressOut,
    pressed,
    props,
    sideShadowColor,
    strokeColor,
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

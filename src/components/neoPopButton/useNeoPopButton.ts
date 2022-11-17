import { useState } from 'react';
import { miColor } from '../../themes';
import type { NeoPopButtonProps } from './neoPopButton.type';

const HEIGHT = 100;
const WIDTH = 200;
const TEXT_TITLE_SIZE = 30;
const BUTTON_RIGHT_SIDE_WIDTH = 20;

export const useNeoPopButton = (props: NeoPopButtonProps) => {
  const {
    backgroundColor = miColor.bluishGray,
    bottomShadowColor = miColor.yellowGold,
    height = HEIGHT,
    sideShadowColor = miColor.bluishGrayLight,
    textStyle,
    title = ' ',
    titleSize = TEXT_TITLE_SIZE,
    width = WIDTH,
  } = props;

  const buttonWidth = width;
  const buttonHeight = height;
  const canvasButtonWidth = buttonWidth + BUTTON_RIGHT_SIDE_WIDTH;
  const canvasButtonHeight = buttonHeight + BUTTON_RIGHT_SIDE_WIDTH;
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
    sideShadowColor,
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

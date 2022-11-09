import { useState } from 'react';
import type { NeoPopButtonProps } from './neoPopButton.type';

export const useNeoPopButton = (props: NeoPopButtonProps) => {
  const {
    titleSize = 30,
    width = 200,
    height = 100,
    backgroundColor = '#add8e6',
    sideShadowColor = '#9dd0e1',
    bottomShadowColor = '#93b8c4',
    textStyle,
    title = 'Title',
  } = props;
  const canvasButtonWidth = width + 20;
  const canvasButtonHeight = height + 20;
  const [x] = useState<number>(-20);
  const [y] = useState<number>(-20);
  //
  const [animatedWidth, setAnimatedWidth] = useState<number>(0);
  const [animatedX, setAnimatedX] = useState<number>(0);
  const [animatedHeight, setAnimatedHeight] = useState<number>(0);
  const [animatedY, setAnimatedY] = useState<number>(0);
  const [textPosition, setTextPosition] = useState({
    x: width / 2 - titleSize,
    y: height / 2 - titleSize / 2,
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
    width,
    height,
    canvasButtonWidth,
    canvasButtonHeight,
    transitionX,
    transitionY,
    x,
    y,
    animatedX,
    animatedWidth,
    animatedY,
    animatedHeight,
    onPressButton,
    onPressOut,
    titleSize,
    textPosition,
    boxShadow,
    backgroundColor,
    sideShadowColor,
    bottomShadowColor,
    textStyle,
    title,
  };
};

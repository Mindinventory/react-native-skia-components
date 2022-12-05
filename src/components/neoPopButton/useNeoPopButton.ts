import { useState } from 'react';

import type { NeoPopButtonProps } from './neoPopButton.type';
import { useSoundPlayer } from './useSoundPlayer';

export const useNeoPopButton = (props: NeoPopButtonProps) => {
  const {
    backgroundColor = '#add8e6',
    bottomShadowColor = '#93b8c4',
    height = 100,
    sideShadowColor = '#9dd0e1',
    textStyle,
    title = ' ',
    titleSize = 30,
    width = 200,
    sound = { name: 'default', type: 'mp3' },
    isSoundEnable = false,
    onPressOutSoundEnabled = false,
  } = props;

  const buttonWidth = width || 250;
  const buttonHeight = height || 200;
  const canvasButtonWidth = buttonWidth + 20;
  const canvasButtonHeight = buttonHeight + 20;
  const [x] = useState<number>(-20);
  const [y] = useState<number>(-20);
  const [animatedWidth, setAnimatedWidth] = useState<number>(0);
  const [animatedX, setAnimatedX] = useState<number>(0);
  const [animatedHeight, setAnimatedHeight] = useState<number>(0);
  const [animatedY, setAnimatedY] = useState<number>(0);
  const [textPosition, setTextPosition] = useState({
    x: buttonWidth / 2 - titleSize,
    y: buttonWidth / 2 - titleSize / 2,
  });
  const [boxShadow, setBoxShadow] = useState(0);
  const { name: soundName, type: soundType } = sound;
  const { playSound } = useSoundPlayer({
    isSoundEnable: isSoundEnable,
    name: soundName || '',
    type: soundType ?? '',
  });

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
    playSound();
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

    if (onPressOutSoundEnabled) {
      playSound();
    }
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

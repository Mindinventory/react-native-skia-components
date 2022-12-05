import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Box, Canvas, Group, rect, rrect } from '@shopify/react-native-skia';

import { miUiStyle } from '../../themes';
import type { NeoPopButtonProps } from './neoPopButton.type';
import { useNeoPopButton } from './useNeoPopButton';

const NeoPopButton = (props: NeoPopButtonProps) => {
  const {
    animatedHeight,
    animatedWidth,
    animatedX,
    animatedY,
    backgroundColor,
    bottomShadowColor,
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
  } = useNeoPopButton(props);

  return (
    <TouchableOpacity
      style={[
        miUiStyle.neoPopButtonStyle.containerStyle.canvasStyle,
        props.style || {},
      ]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      onPressIn={() => {
        onPressButton();
        props.onPressIn?.();
      }}
      onPressOut={() => {
        onPressOut();
        props.onPressOut?.();
      }}
      activeOpacity={1}
    >
      <Canvas
        style={{
          height: canvasButtonHeight,
          width: canvasButtonWidth,
        }}
        children={
          <>
            <Group
              origin={{ x: width, y: 0 }}
              transform={[{ skewY: Math.PI / (1.4 * 3) }]}
            >
              <Box
                box={rrect(
                  rect(width + animatedY, 8, -y, height + animatedHeight),
                  0,
                  0
                )}
                color={sideShadowColor}
              />
            </Group>

            <Group
              origin={{ x: 0, y: height }}
              transform={[{ skewX: Math.PI / 1.4 }]}
            >
              <Box
                box={rrect(
                  rect(x + animatedX, height, width + animatedWidth, -x),
                  0,
                  0
                )}
                color={bottomShadowColor}
              />
            </Group>

            <Box
              box={rrect(
                rect(transitionX, transitionY + 8, width, height),
                0,
                0
              )}
              color={backgroundColor}
            />
          </>
        }
      />
      <View
        style={[
          miUiStyle.neoPopButtonStyle.textContainer.textView,
          {
            height: height,
            left: transitionX,
            top: transitionY + 8,
            width: width,
          },
        ]}
      >
        <Text
          style={[
            miUiStyle.neoPopButtonStyle.textContainer.textStyle,
            {
              fontSize: titleSize,
            },
            textStyle && { ...textStyle },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NeoPopButton;

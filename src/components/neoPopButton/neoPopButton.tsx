import { Box, Canvas, Group, rect, rrect } from '@shopify/react-native-skia';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import type { NeoPopButtonProps } from './neoPopButton.type';
import { useNeoPopButton } from './useNeoPopButton';
import { miUiStyle } from '../../themes';
import NeoPopButtonRight from './neoPopButtonRight';
import { Direction } from '../button/button.type';

const NeoPopButton = (props: NeoPopButtonProps) => {
  const { buttonDirection = Direction.Right } = props;
  const {
    width,
    height,
    canvasButtonWidth,
    canvasButtonHeight,
    transitionX,
    transitionY,
    x,
    y,
    animatedWidth,
    animatedX,
    onPressButton,
    animatedHeight,
    animatedY,
    onPressOut,
    titleSize,
    sideShadowColor,
    backgroundColor,
    bottomShadowColor,
    textStyle,
    title,
  } = useNeoPopButton(props);

  if (buttonDirection === Direction.Right) {
    return <NeoPopButtonRight {...props} />;
  } else {
    return (
      <TouchableOpacity
        style={[
          miUiStyle.neoPopButtonStyle.containerStyle.canvasStyle,
          props.style || {},
        ]}
        onPressIn={onPressButton}
        onPressOut={onPressOut}
        activeOpacity={1}
      >
        <Canvas
          style={{
            width: canvasButtonWidth,
            height: canvasButtonHeight,
          }}
        >
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
            box={rrect(rect(transitionX, transitionY + 8, width, height), 0, 0)}
            color={backgroundColor}
          />
        </Canvas>
        <View
          style={[
            miUiStyle.neoPopButtonStyle.textContainer.textView,
            {
              width: width,
              height: height,
              left: transitionX,
              top: transitionY + 8,
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
  }
};

export default NeoPopButton;

import { Box, Canvas, Group, rect, rrect } from '@shopify/react-native-skia';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import type { NeoPopButtonProps } from './neoPopButton.type';
import { miUiStyle } from '../../themes';
import { useNeoPopButtonRight } from './useNeoPopButtonRight';

const NeoPopButtonRight = (props: NeoPopButtonProps) => {
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
    onPressOut,
    shadowBoxWidth,
    titleSize,
    borderPosition,
    sideShadowColor,
    backgroundColor,
    bottomShadowColor,
    textStyle,
    title,
  } = useNeoPopButtonRight(props);

  return (
    <TouchableOpacity
      style={props.style || {}}
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
        {/* <Group origin={{ x: 0, y: 0 }} transform={[{ skewY: -5 }]}>
          <Box
            box={rrect(
              rect(
                0,
                height + 30,
                width + animatedWidth + 20,
                -shadowBoxWidth + 15
              ),
              0,
              0
            )}
            color={sideShadowColor}
          />
        </Group> */}

        <Group
          origin={{ x: width, y: 0 }}
          transform={[{ skewY: Math.PI / (1.4 * 4) }]}
        >
          <Box
            box={rrect(rect(0, height + 8, -y, height + animatedHeight), 0, 0)}
            color={sideShadowColor}
          />
        </Group>

        <Group origin={{ x: 0, y: height }} transform={[{ skewX: -1.2 }]}>
          <Box
            box={rrect(
              rect(
                x + animatedX + 50,
                height + 8,
                width + animatedWidth,
                -shadowBoxWidth
              ),
              0,
              0
            )}
            color={bottomShadowColor}
          />
        </Group>

        <Box
          box={rrect(
            rect(transitionX + 20, transitionY + 8, width, height),
            0,
            0
          )}
          color={backgroundColor}
        />
      </Canvas>
      <View
        style={[
          miUiStyle.neoPopButtonStyle.textContainer.textView,
          {
            width: width,
            height: height,
            left: transitionX + 20 - 1,
            top: transitionY + borderPosition,
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

export default NeoPopButtonRight;

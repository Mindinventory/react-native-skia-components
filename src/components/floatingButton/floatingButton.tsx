import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Box, Canvas, Group, rect, rrect } from '@shopify/react-native-skia';

import { ButtonType, FloatingButtonProps } from './floatingButton.type';
import { useFloatingButton } from './useFloatingButtonButton';

const FloatingButton = (props: FloatingButtonProps) => {
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
    styles,
    buttonType,
    strokeColor,
  } = useFloatingButton(props);

  // Elevated
  // Flat
  // Flat Strokes
  // Elevated Strokes
  //rgb(48,79,14)
  //rgb(78,132,14)

  // console.log('render');

  return (
    <TouchableOpacity
      style={[
        styles.floatingButtonStyle.containerStyle.canvasStyle,
        props.style || {},
      ]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      onPressIn={() => {
        onPressButton();
      }}
      onPressOut={() => {
        onPressOut();
      }}
      activeOpacity={1}
    >
      <Canvas
        style={{
          height: canvasButtonHeight,
          width: canvasButtonWidth,
        }}
        children={
          <Group>
            {buttonType === ButtonType.elevated ||
            buttonType === ButtonType.elevatedStrokes ? (
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
              </>
            ) : null}
            <Box
              box={rrect(
                rect(transitionX, transitionY + 8, width, height),
                0,
                0
              )}
              color={backgroundColor}
            />
            {buttonType === ButtonType.elevatedStrokes ||
            buttonType === ButtonType.flatStrokes ? (
              <Box
                box={rrect(
                  rect(transitionX, transitionY + 8, width, height),
                  0,
                  0
                )}
                style={'stroke'}
                color={strokeColor}
                strokeWidth={2}
              />
            ) : null}
          </Group>
        }
      />
      <View
        style={[
          styles.floatingButtonStyle.textContainer.textView,
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
            styles.floatingButtonStyle.textContainer.textStyle,
            {
              fontSize: titleSize,
            },
            textStyle && textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(FloatingButton);

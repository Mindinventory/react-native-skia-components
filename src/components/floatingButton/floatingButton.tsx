import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Canvas, Path, Group } from '@shopify/react-native-skia';
import { useFloatingButton } from './useFloatingButton';
import type { FloatingButtonProps } from './floatingButton.type';
import { miUiStyle } from '../../themes';

const FloatingButton = (props: FloatingButtonProps) => {
  const {
    height,
    width,
    depth,
    shadowHeight,
    translate,
    shadowPath,
    title,
    onPressStart,
    onPressEnd,
    isFloating,
    path,
    depthPath,
    nonFloatingDepthPath,
    backgroundColor,
    sideShadowColor,
    bottomShadowColor,
    textStyle,
  } = useFloatingButton({
    ...props,
  });

  return (
    <View>
      <Canvas
        // onTouch={onPressBtn}
        style={[
          { width: width, height: height },
          miUiStyle.floatingButtonStyle.containerStyle.canvasStyle,
          props.style || {},
        ]}
      >
        {isFloating ? (
          <>
            <Group transform={[{ translateY: translate }]}>
              <Path path={path} color={backgroundColor} />
              <Path path={depthPath} color={sideShadowColor} />
            </Group>
          </>
        ) : (
          <>
            <Group transform={[{ translateY: translate }]}>
              <Path path={path} color={backgroundColor} />
            </Group>
            <Group>
              <Path path={nonFloatingDepthPath} color={sideShadowColor} />
            </Group>
          </>
        )}

        {isFloating && <Path path={shadowPath} color={bottomShadowColor} />}
      </Canvas>
      <TouchableOpacity
        onPressIn={onPressStart}
        onPressOut={onPressEnd}
        activeOpacity={1}
        style={[
          miUiStyle.floatingButtonStyle.btnLabel.labelView,
          {
            height: height - shadowHeight - depth,
            width: width,
            transform: [{ translateY: translate }],
          },
        ]}
      >
        <Text
          style={[
            miUiStyle.floatingButtonStyle.btnLabel.labelText,
            miUiStyle.floatingButtonStyle.btnLabel.verticalStyle,
            textStyle && { ...textStyle },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

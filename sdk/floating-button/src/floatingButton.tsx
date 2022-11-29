import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Canvas, Group, Path } from '@shopify/react-native-skia';

import { miUiStyle } from '../themes/index';
import type { FloatingButtonProps } from './floatingButton.type';
import { useFloatingButton } from './useFloatingButton';

const FloatingButton = (props: FloatingButtonProps) => {
  const {
    backgroundColor,
    bottomShadowColor,
    depth,
    depthPath,
    height,
    isFloating,
    nonFloatingDepthPath,
    onPressEnd,
    onPressStart,
    path,
    shadowHeight,
    shadowPath,
    sideShadowColor,
    textStyle,
    title,
    translate,
    width,
  } = useFloatingButton({
    ...props,
  });

  return (
    <View>
      <Canvas
        // onTouch={onPressBtn}
        style={[
          { height: height, width: width },
          miUiStyle.floatingButtonStyle.containerStyle.canvasStyle,
          props.style || {},
        ]}
        children={
          <>
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
          </>
        }
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      />
      <TouchableOpacity
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        onPressIn={() => {
          onPressStart();
          props.onPressIn?.();
        }}
        onPressOut={() => {
          onPressEnd();
          props.onPressOut?.();
        }}
        activeOpacity={1}
        style={[
          miUiStyle.floatingButtonStyle.btnLabel.labelView,
          {
            height: height - shadowHeight - depth,
            transform: [{ translateY: translate }],
            width: width,
          },
        ]}
      >
        <Text
          adjustsFontSizeToFit
          style={[
            miUiStyle.floatingButtonStyle.btnLabel.labelText,
            miUiStyle.floatingButtonStyle.btnLabel.verticalStyle,
            { fontSize: height / 3 },
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
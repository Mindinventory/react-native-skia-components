import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Canvas, Path, Group } from '@shopify/react-native-skia';
import { useFloatingButton } from './useFloatingButton';
import type { FloatingButtonProps } from './floatingButton.type';
import { miUiStyle } from '../../themes';

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
    <>
      <Canvas
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
            width: width,
            transform: [{ translateY: translate }],
          },
        ]}
      >
        <Text
          adjustsFontSizeToFit
          style={[
            miUiStyle.floatingButtonStyle.btnLabel.labelText,
            { fontSize: height / 3 },
            textStyle && { ...textStyle },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(FloatingButton);

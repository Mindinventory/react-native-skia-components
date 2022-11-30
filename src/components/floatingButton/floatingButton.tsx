import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Canvas, Group, Path } from '@shopify/react-native-skia';
import Animated from 'react-native-reanimated';

import type { FloatingButtonProps } from './floatingButton.type';
import { useFloatingButton } from './useFloatingButton';

const FloatingButton = (props: FloatingButtonProps) => {
  const {
    backgroundColor,
    bottomShadowColor,
    depthPath,
    height,
    isFloating,
    nonFloatingDepthPath,
    onPressEnd,
    onPressStart,
    path,
    shadowPath,
    sideShadowColor,
    textStyle,
    title,
    width,
    styles,
    transform,
    textTransformStyle,
    titleSize,
  } = useFloatingButton(props);

  return (
    <View style={styles.starWarButtonStyle.container}>
      <Canvas
        style={[
          { height: height, width: width },
          styles.floatingButtonStyle.containerStyle.canvasStyle,
          props.style || {},
        ]}
        children={
          <>
            {isFloating ? (
              <>
                <Group transform={transform}>
                  <Path path={path} color={backgroundColor} />
                  <Path path={depthPath} color={sideShadowColor} />
                </Group>
                <Path
                  path={shadowPath}
                  color={bottomShadowColor}
                  transform={transform}
                />
              </>
            ) : (
              <>
                <Group transform={transform}>
                  <Path path={path} color={backgroundColor} />
                </Group>
                <Group>
                  <Path path={nonFloatingDepthPath} color={sideShadowColor} />
                </Group>
              </>
            )}
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
        }}
        onPressOut={() => {
          onPressEnd();
        }}
        activeOpacity={1}
        style={[
          styles.floatingButtonStyle.btnLabel.labelView,
          {
            height: height,
            width: width,
            // backgroundColor: 'red',
          },
        ]}
      >
        <Animated.Text
          adjustsFontSizeToFit
          style={[
            styles.floatingButtonStyle.btnLabel.labelText,
            { fontSize: titleSize },
            textStyle && { ...textStyle },
            { transform: [{ rotateX: '45deg' }, { rotateZ: '0deg' }] },
            textTransformStyle,
          ]}
        >
          {title}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

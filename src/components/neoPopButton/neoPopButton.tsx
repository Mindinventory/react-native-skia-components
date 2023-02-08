import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Canvas, Group, Path } from '@shopify/react-native-skia';
import Animated from 'react-native-reanimated';

import type { NeoPopButtonProps } from './neoPopButton.type';
import { useNeoPopButton } from './useNeoPopButton';
import { miColor } from '../../themes';

const NeoPopButton = (props: NeoPopButtonProps) => {
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
    disabled,
  } = useNeoPopButton(props);
  return (
    <View style={styles.starWarButtonStyle.container}>
      <Canvas
        style={[
          { height: height, width: width },
          styles.neoPopButtonStyle.containerStyle.canvasStyle,
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
      />
      <TouchableOpacity
        onPress={props?.onPress}
        onLongPress={props?.onLongPress}
        onPressIn={() => {
          onPressStart();
        }}
        onPressOut={() => {
          onPressEnd();
        }}
        activeOpacity={1}
        style={[
          styles.neoPopButtonStyle.btnLabel.labelView,
          {
            height: height,
            width: width,
          },
        ]}
        disabled={disabled}
      >
        <Animated.Text
          adjustsFontSizeToFit
          style={[
            styles.neoPopButtonStyle.btnLabel.labelText,
            { fontSize: titleSize },
            textStyle && { ...textStyle },
            { transform: [{ rotateX: '45deg' }, { rotateZ: '0deg' }] },
            disabled && { color: miColor.grayShade },
            textTransformStyle,
          ]}
        >
          {title}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(NeoPopButton);

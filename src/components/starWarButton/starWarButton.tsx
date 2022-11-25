import React from 'react';
import { Pressable, Text } from 'react-native';

import {
  BlurMask,
  Canvas,
  LinearGradient,
  RadialGradient,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import Animated from 'react-native-reanimated';

import { miUiStyle } from '../../themes';
import { GradientTypes } from './starWarButton.type';
import { useStarWarButton } from './useStarWarButton';

export const StarWarButtonComponent = () => {
  const {
    blurRadius,
    buttonBorderRadius,
    canvasButtonHeight,
    canvasButtonWidth,
    canvasPadding,
    colors,
    filled,
    gradientType,
    styles,
    textStyle,
    title,
    titleColor,
    props,
    titleSize,
    style,
    scaledButton,
    transformAnimation,
    gradient,
    backgroundColor,
    opacityButton,
    handlePress,
  } = useStarWarButton();

  return (
    <Pressable
      style={[styles.starWarButtonStyle.container || {}]}
      onPress={handlePress}
      onLongPress={props.onLongPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
    >
      <Animated.View
        style={[styles.starWarButtonStyle.container, scaledButton]}
      >
        <Canvas
          style={[
            {
              height: canvasButtonHeight + canvasPadding,
              width: canvasButtonWidth + canvasPadding,
            },
          ]}
          children={
            <RoundedRect
              x={canvasPadding / 2}
              y={canvasPadding / 2}
              height={canvasButtonHeight}
              width={canvasButtonWidth}
              r={buttonBorderRadius}
            >
              {gradientType === GradientTypes.Sweep && (
                <SweepGradient
                  origin={vec(
                    (canvasButtonWidth + canvasPadding) / 2,
                    (canvasButtonHeight + canvasPadding) / 2
                  )}
                  c={vec(gradient?.center?.x, gradient?.center?.y)}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              {gradientType === GradientTypes.Radial && (
                <RadialGradient
                  origin={vec(
                    (canvasButtonWidth + canvasPadding) / 2,
                    (canvasButtonHeight + canvasPadding) / 2
                  )}
                  c={vec(gradient?.center?.x, gradient?.center?.y)}
                  r={gradient?.radius}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              {gradientType === GradientTypes.Linear && (
                <LinearGradient
                  origin={vec(
                    (canvasButtonWidth + canvasPadding) / 2,
                    (canvasButtonHeight + canvasPadding) / 2
                  )}
                  start={vec(gradient?.start?.x, gradient?.start?.y)}
                  end={vec(gradient?.end?.x, gradient?.end?.y)}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              <BlurMask blur={blurRadius} style={filled} />
            </RoundedRect>
          }
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
        <Animated.View
          style={[
            miUiStyle.cardStyle.card,
            styles.starWarButtonStyle.buttonTextView,
            {
              backgroundColor: backgroundColor,
              borderRadius: buttonBorderRadius,
              height: canvasButtonHeight,
              width: canvasButtonWidth,
            },
            opacityButton,
            style,
          ]}
        >
          <Text
            style={[
              {
                color: titleColor,
                fontSize: titleSize,
              },
              textStyle && { ...textStyle },
            ]}
          >
            {title}
          </Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

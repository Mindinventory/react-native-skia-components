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

import { GradientType, StarWarButtonProps } from './starWarButton.type';
import { useStarWarButton } from './useStarWarButton';

export const StarWarButtonComponent = (props: StarWarButtonProps) => {
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
    titleSize,
    style,
    scaledButton,
    transformAnimation,
    gradient,
    backgroundColor,
    opacityButton,
    onPressEnd,
    onPressStart,
  } = useStarWarButton(props);

  return (
    <Pressable
      style={[styles.starWarButtonStyle.container || {}]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      onPressIn={onPressStart}
      onPressOut={onPressEnd}
    >
      <Animated.View
        style={[
          styles.starWarButtonStyle.container,
          scaledButton,
          {
            height: canvasButtonHeight,
            width: canvasButtonWidth,
          },
        ]}
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
              {gradientType === GradientType.sweep && (
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
              {gradientType === GradientType.radial && (
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
              {gradientType === GradientType.linear && (
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
            styles.cardStyle.card,
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

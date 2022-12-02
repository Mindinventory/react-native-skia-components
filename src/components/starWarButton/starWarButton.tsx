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

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const StarWarButtonComponent = React.memo(
  (props: StarWarButtonProps) => {
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
      CANVAS_HEIGHT,
      CANVAS_WIDTH,
    } = useStarWarButton(props);

    return (
      <AnimatedPressable
        style={[styles.starWarButtonStyle.container || {}, scaledButton]}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        onPressIn={onPressStart}
        onPressOut={onPressEnd}
      >
        <Canvas
          style={[
            {
              height: CANVAS_HEIGHT,
              width: CANVAS_WIDTH,
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
                  origin={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
                  c={vec(gradient?.center?.x, gradient?.center?.y)}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              {gradientType === GradientType.radial && (
                <RadialGradient
                  origin={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
                  c={vec(gradient?.center?.x, gradient?.center?.y)}
                  r={gradient?.radius}
                  colors={colors}
                  transform={transformAnimation}
                />
              )}
              {gradientType === GradientType.linear && (
                <LinearGradient
                  origin={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
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
      </AnimatedPressable>
    );
  }
);

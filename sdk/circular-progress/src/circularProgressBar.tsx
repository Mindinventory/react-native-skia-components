import React from 'react';
import { Text, View } from 'react-native';

import {
  Box,
  Canvas,
  Group,
  LinearGradient,
  Path,
  SweepGradient,
  translate,
  vec,
} from '@shopify/react-native-skia';

import { miUiStyle } from '../theme';
import type { CircularProgressBarProps } from './circularProgressBar.type';
import { useCircularProgress } from './useCircularProgressBar';

const CircularProgressBar = (props: CircularProgressBarProps) => {
  const {
    backgroundColor,
    colors,
    elevation,
    fillProgress,
    fontSize,
    fromCircle,
    GradientColors,
    path,
    progress,
    radius,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    strokeWidth,
    viewWidth,
  } = useCircularProgress(props);

  return (
    <View>
      <Canvas
        style={{
          elevation: elevation,
          height: viewWidth,
          shadowColor: shadowColor,
          shadowOffset: shadowOffset,
          shadowOpacity: shadowOpacity,
          shadowRadius: shadowRadius,
          width: viewWidth,
        }}
        children={
          <>
            <Group
              transform={translate({
                x: viewWidth / 2 - radius,
                y: viewWidth / 2 - radius,
              })}
            >
              <Group>
                <LinearGradient
                  start={vec(12, 12)}
                  end={vec(200, 200)}
                  colors={GradientColors}
                />
                <Box box={fromCircle(radius, radius, radius)} />
              </Group>
              <Box
                box={fromCircle(radius, radius, radius - strokeWidth - 10)}
                color={backgroundColor}
              />

              <Group>
                <SweepGradient
                  c={vec((radius * 3) / 2 + radius, radius * 3)}
                  colors={colors}
                />
                <Path
                  path={path}
                  style="stroke"
                  strokeWidth={strokeWidth}
                  end={fillProgress}
                  strokeCap="round"
                />
              </Group>
            </Group>
          </>
        }
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      />
      <View
        style={[
          miUiStyle?.circularProgressBarStyle?.textContainer.textView,
          {
            left: viewWidth / 2 - fontSize,
            top: viewWidth / 2 - fontSize / 2,
          },
        ]}
      >
        <Text
          style={[
            miUiStyle?.circularProgressBarStyle?.textContainer.textStyle,
            { fontSize: fontSize },
          ]}
        >
          {progress}%
        </Text>
      </View>
    </View>
  );
};

export default CircularProgressBar;

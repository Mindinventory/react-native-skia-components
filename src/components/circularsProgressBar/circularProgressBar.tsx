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

import type { CircularProgressBarProps } from './circularProgressBar.type';
import { useCircularProgress } from './useCircularProgressBar';

const VEC_START = 12;
const VEC_END = 200;

const CircularProgressBar = (props: CircularProgressBarProps) => {
  const {
    backgroundColor,
    colors,
    elevation,
    fillProgress,
    fontSize,
    fromCircle,
    gradientColors,
    path,
    progress,
    radius,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    strokeWidth,
    viewWidth,
    styles,
  } = useCircularProgress(props);

  if (progress < 0) {
    // eslint-disable-next-line no-console
    console.warn('Progress value cannot be negative');
  }

  if (progress > 100) {
    // eslint-disable-next-line no-console
    console.warn('Progress value cannot be more than 100');
  }

  const VIEW_WIDTH_DIV = viewWidth / 2;

  return (
    <>
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
                x: VIEW_WIDTH_DIV - radius,
                y: VIEW_WIDTH_DIV - radius,
              })}
            >
              <Group>
                <LinearGradient
                  start={vec(VEC_START, VEC_START)}
                  end={vec(VEC_END, VEC_END)}
                  colors={gradientColors}
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
                  style={'stroke'}
                  strokeWidth={strokeWidth}
                  end={fillProgress}
                  strokeCap={'round'}
                />
              </Group>
            </Group>
          </>
        }
      />
      <View
        style={[
          styles?.circularProgressBarStyle?.textContainer.textView,
          {
            left: VIEW_WIDTH_DIV - fontSize,
            top: VIEW_WIDTH_DIV - fontSize / 2,
          },
        ]}
      >
        <Text
          style={[
            styles?.circularProgressBarStyle?.textContainer.textStyle,
            { fontSize: fontSize },
          ]}
        >
          {progress}%
        </Text>
      </View>
    </>
  );
};

export default React.memo(CircularProgressBar);

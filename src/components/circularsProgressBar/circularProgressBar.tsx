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
import { miUiStyle } from '../../themes';

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
  } = useCircularProgress(props);

  const VIEW_WIDTH_DIV = viewWidth / 2;

  return (
    <>
      <Canvas
        style={{
          width: viewWidth,
          height: viewWidth,
          shadowColor: shadowColor,
          shadowRadius: shadowRadius,
          shadowOpacity: shadowOpacity,
          elevation: elevation,
          shadowOffset: shadowOffset,
        }}
      >
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
              style="stroke"
              strokeWidth={strokeWidth}
              end={fillProgress}
              strokeCap="round"
            />
          </Group>
        </Group>
      </Canvas>
      <View
        style={[
          miUiStyle?.circularProgressBarStyle?.textContainer.textView,
          {
            top: VIEW_WIDTH_DIV - fontSize / 2,
            left: VIEW_WIDTH_DIV - fontSize,
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
    </>
  );
};

export default React.memo(CircularProgressBar);

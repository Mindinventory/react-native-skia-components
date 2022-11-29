import React, { useEffect } from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import {
  Canvas,
  Easing,
  LinearGradient,
  Path,
  runTiming,
  useFont,
  useValue,
  vec,
} from '@shopify/react-native-skia';

import { COLORS, getXY } from '../utils/getXY';
import Axis from './axis/axis';
import AxisLabels from './axisLabels/axisLabels';
import type { BarChartProps } from './barChartProps';
import { Cursor } from './cursor/cursor';
import GridLines from './gridLines/gridLines';
import { useGraphTouchHandler } from './gridLines/useGraphTouchHandler';
import { styles } from './style/styles';
import { useBar } from './useBar';

const BarChart: React.FC<BarChartProps<any>> = ({
  canvasHeight = Dimensions.get('window').height * 0.4,
  canvasWidth = Dimensions.get('window').width * 0.85,
  lineStyle = { color: '#828282', strokeWidth: 1, style: 'stroke' },
  chartPathStyle = {
    color: '#6231ff',
    strokeWidth: 4,
    style: 'fill',
  },
  numberOfTicks = 7,
  labelStyle = { textColor: '#000000' },
  hideAxis = false,
  hideLabels = false,
  fontPath,
  data,
  isGradient,
  gradientColors = COLORS,
  isGridLines,
  barRadius = 0,
  gridStyle = {
    color: '#000000',
    dashedOpacity: 0.08,
    isDotedGridLine: true,
    strokeWidth: 1,
    style: 'stroke',
  },
  cursorStyle = {
    color: '#828282',
    strokeWidth: 1,
    style: 'stroke',
  },
  barWidth = 10,
}) => {
  const { canvasStyles } = styles(canvasHeight, canvasWidth);
  const { style, strokeWidth } = chartPathStyle;
  const { textColor } = labelStyle;

  const animationState = useValue(0);
  const fontT = useFont(fontPath, 8);

  const { graphHeight, graphMargin, graphWidth, xLabel, yLabel } = useBar({
    canvasHeight,
    canvasWidth,
  });

  const { y, barPath, xOrg } = getXY(data, graphHeight, barWidth, barRadius);

  useEffect(() => {
    const animate = () => {
      animationState.current = 0;

      runTiming(animationState, 1, {
        duration: 1600,
        easing: Easing.inOut(Easing.exp),
      });
    };
    animate();
  }, [animationState]);

  const yAxisData = y.ticks(numberOfTicks);
  const xAxisData = xOrg.ticks(numberOfTicks);

  return (
    <SafeAreaView style={canvasStyles.canvasContainer}>
      <Canvas
        style={canvasStyles.canvasStyle}
        onTouch={useGraphTouchHandler({
          graphHeight,
          graphWidth,
          x: xLabel,
          xBounds: graphMargin,
          y: yLabel,
          yBounds: graphHeight,
        })}
        children={() => {
          <>
            <Axis
              hideAxis={hideAxis}
              graphHeight={graphHeight}
              graphWidth={graphWidth}
              lineStyle={lineStyle}
              graphMargin={graphMargin}
            />

            {isGridLines && (
              <GridLines
                xAxisData={xAxisData}
                yAxisData={yAxisData}
                graphHeight={graphHeight}
                x={xOrg}
                y={y}
                graphWidth={graphWidth + 20}
                gridStyle={gridStyle}
              />
            )}
            <Path
              path={barPath}
              strokeWidth={strokeWidth}
              start={0}
              end={animationState}
              style={style}
            >
              {isGradient && (
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(graphWidth, 0)}
                  colors={gradientColors}
                />
              )}
            </Path>

            {fontT != null && !hideLabels && (
              <AxisLabels
                xAxisData={xAxisData}
                font={fontT}
                textColor={textColor}
                x={xOrg}
                graphHeight={graphHeight}
                yAxisData={yAxisData}
                y={y}
              />
            )}

            <Cursor
              xLabel={xLabel}
              yLabel={yLabel}
              width={20}
              graphWidth={graphWidth}
              graphHeight={graphHeight}
              cursorStyle={cursorStyle}
            />
          </>;
        }}
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      />
    </SafeAreaView>
  );
};

export default BarChart;

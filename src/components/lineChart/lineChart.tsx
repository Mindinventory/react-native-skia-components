import React from 'react';
import { View } from 'react-native';

import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia';

import Axis from './axis/axis';
import AxisLabels from './axisLabels/axisLabels';
import { Cursor } from './cursor/cursor';
import GridLines from './gridLines/gridLines';
import type { LineChartProps } from './LineChartProps';
import { SelectionLabels } from './selectionLabels/selectionLabels';
import { useGraphTouchHandler } from './useGraphTouchHandler';
import { useLineChart } from './useLineChart';

const LineChart = (props: LineChartProps) => {
  const {
    animationState,
    chartPathStyle,
    cursorStyle,
    data,
    font,
    gradientColors,
    graphHeight,
    graphMargin,
    graphWidth,
    gridStyle,
    hideAxis,
    hideLabels,
    isGradient,
    isGridLines,
    labelStyle,
    axisStyle,
    max,
    path,
    selectionLabelStyle,
    styles,
    x,
    xAxisData,
    xLabel,
    y,
    yAxisData,
    yLabel,
    canvasHeight,
    canvasWidth,
  } = useLineChart(props);
  const { color, style, strokeWidth } = chartPathStyle;

  return (
    <View style={styles.lineChartStyle.canvasStyles.canvasContainer}>
      <Canvas
        style={{ height: canvasHeight, width: canvasWidth }}
        onTouch={useGraphTouchHandler({
          graphHeight,
          graphWidth,
          x: xLabel,
          xBounds: graphMargin,
          y: yLabel,
          yBounds: graphHeight + 5,
        })}
        children={
          <>
            <Axis
              hideAxis={hideAxis}
              graphHeight={graphHeight}
              graphWidth={graphWidth}
              axisStyle={axisStyle}
              graphMargin={graphMargin}
            />

            {/* {animateChart()} */}

            {isGridLines && (
              <GridLines
                xAxisData={xAxisData}
                yAxisData={yAxisData}
                graphHeight={graphHeight}
                x={x}
                y={y}
                graphWidth={graphWidth}
                gridStyle={gridStyle}
              />
            )}

            <Path
              style={style}
              path={path}
              strokeWidth={strokeWidth}
              color={color}
              start={0}
              end={animationState}
            >
              {isGradient && (
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(graphWidth, 0)}
                  colors={gradientColors}
                />
              )}
            </Path>

            {font != null && !hideLabels && (
              <AxisLabels
                xAxisData={xAxisData}
                font={font}
                textColor={labelStyle.color}
                x={x}
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

            {font != null && data.length > 0 && (
              <SelectionLabels
                font={font}
                xLabel={xLabel}
                yLabel={yLabel}
                x={x}
                y={y}
                data={data}
                max={max}
                yAxisData={yAxisData}
                selectionLabelStyle={selectionLabelStyle}
              />
            )}
          </>
        }
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      />
    </View>
  );
};

export default LineChart;

import {
  Easing,
  runTiming,
  useComputedValue,
  useFont,
  useValue,
} from '@shopify/react-native-skia';
import { curveLinear } from 'd3';

import { useMiUiContext } from '../../context';
import { miColor } from '../../themes';
import { buildGraph, COLORS } from '../lineChart/buildGraph';
import type { LineChartProps } from './LineChartProps';

const { black, white, lightPink } = miColor;

export const useLineChart = (props: LineChartProps) => {
  const {
    canvasHeight,
    canvasWidth,
    axisStyle = { color: black, strokeWidth: 2, style: 'stroke' },
    chartPathStyle = {
      color: '#6231ff',
      strokeWidth: 4,
      style: 'stroke',
    },
    numberOfTicks = 5,
    labelStyle = { color: black },
    hideAxis = false,
    hideLabels = false,
    fontPath,
    data,
    isGradient,
    gradientColors = COLORS,
    isGridLines,
    gridStyle = {
      ...props.gridStyle,
      color: white,
      dashedOpacity: 0.08,
      isDotedGridLine: true,
      strokeWidth: 1,
      style: 'stroke',
    },
    cursorStyle = {
      color: white,
      cursorLineStyle: { color: black, strokeWidth: 1, style: 'stroke' },
      strokeWidth: 1,
      style: 'stroke',
    },
    selectionLabelStyle = { color: black },
    formateXLabel,
    formateYLabel,
    fill,
    fullWidthPreview,
    isSlider = false,
    curve = curveLinear,
  } = props;

  const sliderStyle = {
    innerColor: lightPink,
    innerRadius: 7.5,
    outerColor: white,
    outerRadius: 10,
    ...props.sliderStyle,
  };

  const { styles } = useMiUiContext();

  const font = useFont(fontPath, 8);

  const graphMargin = canvasWidth * 0.088;
  const graphHeight = canvasHeight - 2 * graphMargin;
  const graphWidth = canvasWidth - 2;

  const animationState = useValue(0);
  const animateChart = () => {
    animationState.current = 0;

    runTiming(animationState, graphWidth, {
      duration: 8000,
      easing: Easing.inOut(Easing.exp),
    });
  };

  const { x, y, max, graphData } = buildGraph(
    data,
    graphHeight,
    graphMargin,
    graphWidth,
    fill,
    fullWidthPreview,
    curve
  );

  let result;

  const path = useComputedValue(() => {
    const start = graphData.curve;
    const end = graphData.curve;

    result = start.interpolate(end, 1);
    return result?.toSVGString() ?? '0';
  }, [animationState]);

  const yAxisData = y.ticks(numberOfTicks);
  const xAxisData = x.ticks(numberOfTicks);

  const xLabel = useValue(-10);
  const yLabel = useValue(-10);

  const touchPos = useValue(result?.getPoint(0));

  return {
    animateChart,
    animationState,
    axisStyle,
    canvasHeight,
    canvasWidth,
    chartPathStyle,
    cursorStyle,
    data,
    font,
    formateXLabel,
    formateYLabel,
    fullWidthPreview,
    gradientColors,
    graphHeight,
    graphMargin,
    graphWidth,
    gridStyle,
    hideAxis,
    hideLabels,
    isGradient,
    isGridLines,
    isSlider,
    labelStyle,
    max,
    path,
    result,
    selectionLabelStyle,
    sliderStyle,
    styles,
    touchPos,
    x,
    xAxisData,
    xLabel,
    y,
    yAxisData,
    yLabel,
  };
};

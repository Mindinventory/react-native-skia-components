import type {
  PaintStyle,
  SkEnum,
  SkiaMutableValue,
  SkiaValue,
  SkPath,
} from '@shopify/react-native-skia';
import type { CurveFactory } from 'd3';
import type { ScaleLinear } from 'd3-scale';

export interface LineChartProps {
  canvasHeight: number;
  canvasWidth: number;
  axisStyle?: StyleProps;
  chartPathStyle?: StyleProps;
  numberOfTicks?: number;
  fontPath?: any;
  labelStyle?: LabelProps;
  hideLabels?: boolean;
  hideAxis?: boolean;
  data: number[];
  isGradient?: boolean;
  gradientColors?: Float32Array[];
  isGridLines?: boolean;
  gridStyle?: StyleProps;
  cursorStyle?: StyleProps;
  selectionLabelStyle?: LabelProps;
  formateXLabel?: any;
  formateYLabel?: any;
  fill?: boolean;
  fullWidthPreview?: boolean;
  isSlider?: boolean;
  sliderStyle?: SliderStyleProps;
  curve?: CurveFactory;
}

export interface SliderStyleProps {
  innerColor?: string | Float32Array | number;
  outerColor?: string | Float32Array | number;
  outerRadius?: number;
  innerRadius?: number;
}

export interface GraphData {
  min: number;
  max: number;
  curve: SkPath;
}

export interface StyleProps {
  color?: string | Float32Array | number;
  style?: SkEnum<typeof PaintStyle>;
  strokeWidth?: number;
  isDotedGridLine?: boolean;
  dashedOpacity?: number;
  cursorLineStyle?: StyleProps;
}

export interface LabelProps {
  color: string | Float32Array | number;
}

export interface SelectedPointProps {
  xLabel: SkiaValue<number>;
  yLabel: SkiaValue<number>;
  x: ScaleLinear<number, number, never>;
  font: any;
  data: number[];
  selectionLabelStyle: LabelProps;
  y: ScaleLinear<number, number, never>;
  yAxisData: number[];
  max: number;
  formateXLabel?: any;
}

export interface GridLineProps {
  xAxisData: any[];
  yAxisData: any[];
  graphWidth: number;
  graphHeight: number;
  y: ScaleLinear<number, number, never>;
  x: ScaleLinear<number, number, never>;
  gridStyle: StyleProps;
}

export interface CursorProps {
  xLabel: SkiaValue<number>;
  yLabel: SkiaValue<number>;
  width: number;
  graphHeight: number;
  graphWidth: number;
  cursorStyle: StyleProps;
}

export interface SelectedPositions {
  translateX: number;
  translateY: number;
}

export interface ClickPoints {
  start: number;
  end: number;
}
export interface AxisProps {
  graphHeight: number;
  graphWidth: number;
  axisStyle: StyleProps;
  graphMargin: number;
  fullWidthPreview?: boolean;
}

export interface AxisLabelsProps {
  xAxisData: any[];
  font: any;
  textColor: string | Float32Array | number;
  graphHeight: number;
  yAxisData: any[];
  y: ScaleLinear<number, number, never>;
  x: ScaleLinear<number, number, never>;
  formateXLabel?: any;
  formateYLabel?: any;
  data: any[];
  fullWidthPreview?: boolean;
}

export interface SliderProps {
  touchPos: SkiaMutableValue<any>;
  font: any;
  graphWidth: number;
  yAxisData: number[];
  y: ScaleLinear<number, number, never>;
  max: number;
  sliderStyle: SliderStyleProps;
}

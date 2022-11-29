import type {
  PaintStyle,
  SkEnum,
  SkiaValue,
  SkPath,
} from '@shopify/react-native-skia';
import type { ScaleLinear, ScaleTime } from 'd3-scale';

export interface BarChartProps<T> {
  canvasHeight: number;
  canvasWidth: number;
  lineStyle?: {
    color: string;
    strokeWidth: number;
    style: 'fill' | 'stroke' | undefined;
  };
  chartPathStyle?: StyleProps;
  numberOfTicks?: number;
  fontPath?: any;
  labelStyle?: LabelProps;
  hideLabels?: boolean;
  hideAxis?: boolean;
  data: T[];
  isGradient?: boolean;
  gradientColors?: Float32Array[];
  isGridLines?: boolean;
  gridStyle?: StyleProps;
  cursorStyle?: StyleProps;
  selectionLabelStyle?: LabelProps;
  barRadius?: number;
  barWidth: number;
  graphMargin?: number;
  formatLabel?: (x: string) => void;
}

export interface GraphData {
  min: number;
  max: number;
  curve: SkPath;
}

export interface StyleProps {
  color: string | Float32Array | number;
  style: SkEnum<typeof PaintStyle>;
  strokeWidth: number;
  isDotedGridLine?: boolean;
  dashedOpacity?: number;
}

export interface LabelProps {
  textColor: string | Float32Array | number;
}

export interface SelectedPointProps<T> {
  xLabel: SkiaValue<number>;
  yLabel: SkiaValue<number>;
  x: ScaleTime<number, number, never>;
  font: any;
  data: T[];
  selectionLabelStyle: LabelProps;
  y: ScaleLinear<number, number, never>;
}

export interface GridLineProps {
  xAxisData: any[];
  yAxisData: any[];
  graphWidth: number;
  graphHeight: number;
  y: ScaleLinear<number, number, never>;
  x: ScaleTime<number, number, never>;
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
  hideAxis: boolean;
  graphHeight: number;
  graphWidth: number;
  lineStyle: {
    color: string;
    strokeWidth: number;
    style: 'fill' | 'stroke' | undefined;
  };
  graphMargin: number;
}

export interface AxisLabelsProps {
  xAxisData: any[];
  font: any;
  textColor: string | Float32Array | number;
  graphHeight: number;
  yAxisData: any[];
  y: ScaleLinear<number, number, never>;
  x: ScaleTime<number, number, never>;
}

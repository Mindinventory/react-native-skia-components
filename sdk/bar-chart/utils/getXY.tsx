import { Dimensions } from 'react-native';

import { Skia } from '@shopify/react-native-skia';
import * as d3 from 'd3';
import { scaleLinear, scaleTime } from 'd3';

export type DataPoint = {
  date: string;
  value: number;
};

const { height, width } = Dimensions.get('window');
export const CanvasHeight = height * 0.5;
export const CanvasWidth = width * 0.85;
export const GraphMargin = 30;
export const GraphHeight = CanvasHeight - 2 * GraphMargin;
export const GraphWidth = CanvasWidth - 2;
export const numberOfTicks = 5;

export const COLORS = ['#F69D69', '#FFC37D', '#61E0A1', '#31CBD1'].map(
  Skia.Color
);

export const getXY = (
  data: DataPoint[],
  graphHeight: number,
  barWidth: number,
  barRadius: number
) => {
  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));

  const sorted = data;
  const minDate = sorted[0]?.date;
  const maxDate = sorted?.reverse()[0]?.date;

  const xDomain = data.reverse().map((dataPoint: DataPoint) => dataPoint.date);

  const x = d3.scalePoint().domain(xDomain).range([0, GraphWidth]).padding(1);

  const xOrg = scaleTime()
    .domain([new Date(minDate!), new Date(maxDate!)])
    .range([GraphMargin, GraphWidth]);

  const y = scaleLinear().domain([min, max]).range([graphHeight, 0]);

  const barPath = Skia.Path.Make();

  data.forEach((dataPoint: DataPoint) => {
    let xVal = x(dataPoint.date) ?? 0;
    const rect = Skia.XYWHRect(
      xVal + barWidth * 2 - barWidth / 2,
      graphHeight,
      barWidth,
      y(dataPoint.value) * -1
    );
    const rrect = Skia.RRectXY(rect, barRadius, barRadius);
    barPath.addRRect(rrect);
  });

  return { barPath, max, min, x, xOrg, y };
};

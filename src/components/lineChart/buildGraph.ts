import { Skia } from '@shopify/react-native-skia';
import { curveLinear, line } from 'd3';
import { scaleLinear, scaleTime } from 'd3-scale';

import { miColor } from '../../themes';

const { orange, yellow, lightGreen, green } = miColor;

export const COLORS = [orange, yellow, lightGreen, green].map(Skia.Color);

export const buildGraph = (
  data: any[],
  graphHeight: number,
  graphMargin: number,
  graphWidth: number
) => {
  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));

  const sorted = data.sort((a, b) => a.data - b.data);
  const minDate = sorted[0];
  const maxDate = sorted.reverse()[0];
  const x = scaleTime()
    .domain([new Date(minDate?.data!), new Date(maxDate?.data!)])
    .range([graphMargin, graphWidth - 10]);
  const y = scaleLinear().domain([min, max]).range([graphHeight, 0]);

  const curvedLine = line<any>()
    .x((d) => x(new Date(d.data)))
    .y((d) => y(d.value))
    .curve(curveLinear)(data.reverse());

  const skPath = Skia.Path.MakeFromSVGString(curvedLine!);
  const graphData = {
    curve: skPath!,
    max,
    min,
  };
  return { curvedLine, graphData, max, min, x, y };
};

import { Skia } from '@shopify/react-native-skia';
import { curveLinear, line } from 'd3';
import { scaleLinear } from 'd3-scale';

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
  const minDate = data.findIndex((item) => item.data === sorted[0].data);
  const maxDate = data.findIndex(
    (item) => item.data === sorted.reverse()[0].data
  );

  const x = scaleLinear()
    .domain([minDate, maxDate])
    .range([graphMargin, graphWidth - 10]);
  const y = scaleLinear().domain([min, max]).range([graphHeight, 0]);

  const curvedLine = line<any>()
    .x((_d, index) => x(index))
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

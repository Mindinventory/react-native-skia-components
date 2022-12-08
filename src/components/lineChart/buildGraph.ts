import { Skia } from '@shopify/react-native-skia';
import { CurveFactory, curveLinear, line } from 'd3';
import { scaleLinear } from 'd3-scale';

import { miColor } from '../../themes';

const { orange, yellow, lightGreen, green } = miColor;

export const COLORS = [orange, yellow, lightGreen, green].map(Skia.Color);

export const buildGraph = (
  gData: any[],
  graphHeight: number,
  graphMargin: number,
  graphWidth: number,
  fill?: boolean,
  fullWidthPreview?: boolean,
  curve?: CurveFactory
) => {
  const sData = [
    ...gData.slice(0, 0),
    { data: gData.sort((a, b) => a.data - b.data)[0].data, value: 0 },
    ...gData.slice(0),
  ];

  const data = fill
    ? [
        ...sData.slice(0, sData.length),
        {
          data: sData.sort((a, b) => a.data - b.data)[sData.length - 1].data,
          value: 0,
        },
        ...sData.slice(sData.length),
      ]
    : gData;

  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));

  const sorted = data.sort((a, b) => a.data - b.data);
  const minDate = data.findIndex((item) => item.data === sorted[0].data);
  const maxDate = data.findIndex(
    (item) => item.data === sorted.reverse()[0].data
  );

  const x = scaleLinear()
    .domain([minDate, maxDate])
    .range([fullWidthPreview ? 0 : graphMargin, graphWidth - 24]);
  const y = scaleLinear()
    .domain([min, max])
    .range([graphHeight - 24, 0]);

  const curvedLine = line<any>()
    .x((_d, index) => x(index))
    .y((d) => y(d.value))
    .curve(curve ? curve : curveLinear)(fill ? data : data.reverse());

  const skPath = Skia.Path.MakeFromSVGString(curvedLine!);
  const graphData = {
    curve: skPath!,
    max,
    min,
  };
  return { curvedLine, graphData, max, min, x, y };
};

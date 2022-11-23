import React from 'react';

import { Text } from '@shopify/react-native-skia';

import { MARGIN } from '../../../utils/graphUtils';
import type { AxisLabelsProps } from '../LineChartProps';

const AxisLabels = (props: AxisLabelsProps) => {
  const {
    xAxisData,
    font,
    textColor,
    x,
    graphHeight,
    yAxisData,
    y,
    formateXLabel,
    formateYLabel,
    data,
  } = props;

  return (
    <>
      {xAxisData.map((item, index) => {
        return (
          <Text
            color={textColor}
            key={index.toString()}
            font={font}
            text={
              formateXLabel
                ? formateXLabel(data[item].data)
                : data[item].data.toString()
            }
            x={x(item)}
            y={graphHeight + MARGIN}
          />
        );
      })}

      {yAxisData.map((item, index) => {
        return (
          <Text
            text={
              formateYLabel ? formateYLabel(item.toString()) : item.toString()
            }
            color={textColor}
            x={2}
            y={y(item) + 2}
            key={index.toString()}
            font={font}
          />
        );
      })}
    </>
  );
};

export default AxisLabels;

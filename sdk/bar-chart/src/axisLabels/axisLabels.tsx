import React from 'react';

import { Text } from '@shopify/react-native-skia';
import moment from 'moment';

import type { AxisLabelsProps } from '../barChartProps';

const AxisLabels = ({
  xAxisData,
  font,
  textColor,
  x,
  graphHeight,
  yAxisData,
  y,
}: AxisLabelsProps) => {
  return (
    <>
      {xAxisData.map((item, index) => {
        return (
          <Text
            color={textColor}
            key={index.toString()}
            font={font}
            text={moment(item).format('MMMYY')}
            x={x(item) - 3}
            y={graphHeight + 20}
          />
        );
      })}

      {yAxisData.map((item, index) => {
        return (
          <Text
            text={item.toString()}
            color={textColor}
            x={1}
            y={y(item) - 3}
            key={index.toString()}
            font={font}
          />
        );
      })}
    </>
  );
};

export default AxisLabels;

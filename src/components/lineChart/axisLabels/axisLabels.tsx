import React from 'react';

import { Text } from '@shopify/react-native-skia';
import moment from 'moment';

import { MARGIN } from '../../../utils/graphUtils';
import type { AxisLabelsProps } from '../LineChartProps';

const AxisLabels = (props: AxisLabelsProps) => {
  const { xAxisData, font, textColor, x, graphHeight, yAxisData, y } = props;

  return (
    <>
      {xAxisData.map((item, index) => {
        return (
          <Text
            color={textColor}
            key={index.toString()}
            font={font}
            text={moment(item).format('DDMMM')}
            x={x(item)}
            y={graphHeight + MARGIN}
          />
        );
      })}

      {yAxisData.map((item, index) => {
        return (
          <Text
            text={item.toString()}
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

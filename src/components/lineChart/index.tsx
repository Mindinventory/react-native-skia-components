import React from 'react';

import { MiUiProvider } from '../../context';
import LineChart from './lineChart';
import type { LineChartProps } from './LineChartProps';

const LineChartComponent = (props: LineChartProps) => {
  return (
    <MiUiProvider props={props}>
      <LineChart {...props} />
    </MiUiProvider>
  );
};

export { LineChartComponent };
export { LineChart };

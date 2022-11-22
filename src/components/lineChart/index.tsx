import React from 'react';

import LineChart from './lineChart';
import type { LineChartProps } from './LineChartProps';

const LineChartComponent = (props: LineChartProps) => {
  return <LineChart props={props} />;
};

export { LineChartComponent };
export { LineChart };

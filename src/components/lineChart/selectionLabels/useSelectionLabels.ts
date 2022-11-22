import { useState } from 'react';

import { useComputedValue } from '@shopify/react-native-skia';
import moment from 'moment';

import type {
  ClickPoints,
  SelectedPointProps,
  SelectedPositions,
} from '../LineChartProps';

export const useSelectionLabels = (props: SelectedPointProps<any>) => {
  const { xLabel, yLabel, x, data, selectionLabelStyle, y, yAxisData, max } =
    props;
  const { textColor } = selectionLabelStyle;
  const [selectedPositions, setSelectedPositions] =
    useState<SelectedPositions>();
  const [selectedData, setSelectedData] = useState<string>();

  const getX = (axisData: any[], point: number) => {
    const xPoint: ClickPoints[] = [];
    axisData.forEach((item, index) => {
      if (index === 0) {
        xPoint.push({
          end: x(
            new Date(
              axisData[
                axisData.findIndex((xAxis) => xAxis.data === item.data)
              ].data
            )
          ),
          start: 0,
        });
      } else {
        xPoint.push({
          end: x(
            new Date(
              axisData[
                axisData.findIndex((xAxis) => xAxis.data === item.data)
              ].data
            )
          ),
          start: x(
            new Date(
              axisData[
                axisData.findIndex((xAxis) => xAxis.data === item.data) - 1
              ].data
            )
          ),
        });
      }
    });

    const valueOfXY = axisData.find(
      (_element, index) =>
        index ===
        xPoint.findIndex((xAxis) => xAxis.start <= point && xAxis.end >= point)
    );

    return valueOfXY;
  };

  const getY = (point: number) => {
    let yPoints: ClickPoints[] = [];
    let valueDiff = 0;

    const dataOfYAxis: number[] = yAxisData.reverse();

    dataOfYAxis.forEach((element: any, index: number) => {
      if (dataOfYAxis[0] && dataOfYAxis[1]) {
        valueDiff = dataOfYAxis[0] - dataOfYAxis[1];
      }
      if (index !== 0) {
        yPoints.push({
          end: y(
            dataOfYAxis[
              dataOfYAxis.findIndex((xAxis: number) => xAxis === element)
            ]!
          ),
          start: y(
            dataOfYAxis[
              dataOfYAxis.findIndex((xAxis: number) => xAxis === element) - 1
            ]!
          ),
        });
      } else {
        yPoints.push({
          end: y(
            dataOfYAxis[
              dataOfYAxis.findIndex((xAxis: number) => xAxis === element)
            ]!
          ),
          start: 366,
        });
      }
    });

    if (yPoints[1]) {
      const pixelDiff = yPoints[1].end - yPoints[1].start;
      const diffValue = valueDiff / pixelDiff;

      return max + diffValue * -point;
    }
    return 0;
  };

  useComputedValue(() => {
    setSelectedPositions({
      translateX: xLabel.current,
      translateY: yLabel.current,
    });

    const xData = getX(data, xLabel.current);

    if (xData && yLabel) {
      setSelectedData(
        `${moment(xData.data).format('DDMMM')}, ${Math.round(
          getY(yLabel.current)
        )}`
      );
    }
  }, [xLabel, yLabel]);

  return {
    ...props,
    selectedData,
    selectedPositions,
    textColor,
  };
};

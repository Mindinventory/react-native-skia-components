import { useComputedValue, useValue } from '@shopify/react-native-skia';

import type { ClickPoints, SliderProps } from '../LineChartProps';

export const useSlider = (props: SliderProps) => {
  const { font, yAxisData, y, max, touchPos, sliderStyle } = props;

  const selectLabel = useValue('');

  const textX = useComputedValue(() => touchPos.current.x - 24, [touchPos]);
  const textY = useComputedValue(() => touchPos.current.y - 18, [touchPos]);

  const getY = (point: number) => {
    let yPoints: ClickPoints[] = [];

    const dataOfYAxis: number[] = yAxisData.reverse();

    const firstIndex = dataOfYAxis[0] ? dataOfYAxis[0] : 0;
    const secondIndex = dataOfYAxis[1] ? dataOfYAxis[1] : 0;

    const valueDiff = firstIndex - secondIndex;

    dataOfYAxis.forEach((element: any, index: number) => {
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

  const label = useComputedValue(() => {
    selectLabel.current = getY(touchPos.current.y).toFixed(2);
    return selectLabel.current;
  }, [touchPos]);

  const { innerColor, innerRadius, outerColor, outerRadius } = sliderStyle;

  return {
    font,
    innerColor,
    innerRadius,
    label,
    outerColor,
    outerRadius,
    textX,
    textY,
    touchPos,
  };
};

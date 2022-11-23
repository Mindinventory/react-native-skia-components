import {
  clamp,
  runDecay,
  SkiaMutableValue,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia';

import { GRAPH_MARGIN } from '../../utils/graphUtils';

interface TouchProps {
  x: SkiaMutableValue<number>;
  y: SkiaMutableValue<number>;
  xBounds: number;
  yBounds: number;
  graphHeight: number;
  graphWidth: number;
}

export const useGraphTouchHandler = ({
  x,
  y,
  xBounds,
  yBounds,
  graphHeight,
  graphWidth,
}: TouchProps) => {
  const offsetX = useValue(0);
  const offsetY = useValue(0);

  return useTouchHandler({
    onActive(touchInfo) {
      if (touchInfo.x > xBounds) {
        x.current = clamp(
          offsetX.current + touchInfo.x,
          GRAPH_MARGIN,
          graphWidth
        );
      }
      if (touchInfo.y < yBounds) {
        y.current = clamp(offsetY.current + touchInfo.y, 0, graphHeight);
      }
    },
    onEnd(touchInfo) {
      runDecay(x, { clamp: [0, graphWidth], velocity: touchInfo.velocityX });
      runDecay(y, { clamp: [0, graphHeight], velocity: touchInfo.velocityY });
    },
    onStart(touchInfo) {
      // x.current = touchInfo.x
      // y.current = touchInfo
      offsetX.current = x.current - touchInfo.x;
      offsetY.current = y.current - touchInfo.y;
    },
  });
};

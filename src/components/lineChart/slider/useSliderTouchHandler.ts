import {
  SkiaMutableValue,
  SkPath,
  useTouchHandler,
} from '@shopify/react-native-skia';

export const useSliderTouchHandler = ({
  touchPos,
  graphWidth,
  result,
}: {
  touchPos: SkiaMutableValue<any>;
  graphWidth: number;
  result: SkPath | undefined;
}) => {
  const getPointAtPositionInPath = (x: number, width: number, path: SkPath) => {
    const index = Math.max(0, Math.floor(x / (width / 16)));

    const fraction = (x / (width / 16)) % 1;
    const p1 = path.getPoint(index);
    if (index < path.countPoints() - 1) {
      const p2 = path.getPoint(index + 1);

      return {
        x: p1.x + (p2.x - p1.x) * fraction,
        y: p1.y + (p2.y - p1.y) * fraction,
      };
    }
    return p1;
  };

  return useTouchHandler({
    onActive: ({ x }) =>
      (touchPos.current = getPointAtPositionInPath(x, graphWidth, result!)),
  });
};

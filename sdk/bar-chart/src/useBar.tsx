import { useValue } from '@shopify/react-native-skia';

interface useBarProps {
  canvasWidth: number;
  canvasHeight: number;
}

export const useBar = ({ canvasWidth, canvasHeight }: useBarProps) => {
  const graphMargin = canvasWidth * 0.088;
  const graphHeight = canvasHeight - 2 * graphMargin;
  const graphWidth = canvasWidth;

  const xLabel = useValue(-10);
  const yLabel = useValue(-10);

  return {
    graphHeight,
    graphMargin,
    graphWidth,
    xLabel,
    yLabel,
  };
};

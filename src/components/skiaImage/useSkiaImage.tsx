import { ClipRatio, ImageColorMatrix, SkiaImageProps } from './SkiaImage.type';

export const useSkiaImage = (props: SkiaImageProps) => {
  const {
    height,
    width,
    source,
    filterMatrix = ImageColorMatrix.NONE,
    clip = false,
    invertClip = false,
    clipRadius = 50,
    clipRatio,
  } = props;

  const CANVAS_WIDTH = width;
  const CANVAS_HEIGHT = height;
  const padding = 10;
  const clippingRatio: ClipRatio = clipRatio
    ? clipRatio
    : {
        height: 100,
        radius: 100,
        width: 100,
        x: 10,
        y: 10,
      };
  return {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    clip,
    clippingRatio,
    clipRadius,
    filterMatrix,
    invertClip,
    padding,
    source,
  };
};

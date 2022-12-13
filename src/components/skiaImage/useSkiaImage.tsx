import { ImageColorMatrix, SkiaImageProps } from './SkiaImage.type';

export const useSkiaImage = (props: SkiaImageProps) => {
  const {
    height,
    width,
    source,
    filterMatrix = ImageColorMatrix.NONE,
    invertClip = false,
    clipRadius = 50,
    clipPadding,
    clip,
    imageSizeMode = 'cover',
  } = props;

  const CANVAS_HEIGHT = height;
  const CANVAS_WIDTH = width;
  const padding = 10;

  return {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    clip,
    clipPadding,
    clipRadius,
    filterMatrix,
    imageSizeMode,
    invertClip,
    padding,
    source,
  };
};

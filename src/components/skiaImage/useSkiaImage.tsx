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

  const canvasHeight = height;
  const canvasWidth = width;
  const padding = 10;

  return {
    canvasHeight,
    canvasWidth,
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

import { ImageColorMatrix, SkiaImageProps } from './SkiaImage.type';

export const useSkiaImage = (props: SkiaImageProps) => {
  const {
    blur = 0,
    clip,
    clipPadding,
    clipRadius = 50,
    filterMatrix = ImageColorMatrix.NONE,
    height,
    imageSizeMode = 'cover',
    invertClip = false,
    source,
    width,
  } = props;

  const canvasHeight = height;
  const canvasWidth = width;
  const padding = 10;

  return {
    blur,
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

import { ImageConstant } from './Image.Constant';
import { ImageColorMatrix, SkiaImageProps } from './SkiaImage.type';

export const useSkiaImage = (props: SkiaImageProps) => {
  const {
    blur = ImageConstant.deafult.blur,
    clip,
    clipPadding,
    clipRadius = ImageConstant.deafult.clipRadius,
    filterMatrix = ImageColorMatrix.NONE,
    height,
    imageSizeMode = 'cover',
    invertClip = ImageConstant.deafult.invertClip,
    source,
    width,
  } = props;

  const canvasHeight = height;
  const canvasWidth = width;
  const padding = ImageConstant.deafult.padding;

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

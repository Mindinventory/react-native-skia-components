import React from 'react';

import { Blur, ColorMatrix, Image } from '@shopify/react-native-skia';

import type { IRNImage } from './SkiaImage.type';

const RNImage = (props: IRNImage) => {
  const { blur, filterMatrix, height, image, imageSizeMode, width, x, y } =
    props;

  return (
    <Image
      x={x}
      y={y}
      width={width}
      height={height}
      image={image}
      fit={imageSizeMode}
    >
      <Blur blur={blur} mode="clamp">
        <ColorMatrix matrix={filterMatrix} />
      </Blur>
    </Image>
  );
};

export default React.memo(RNImage);

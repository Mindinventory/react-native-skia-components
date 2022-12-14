import React from 'react';
import { View } from 'react-native';

import {
  Blur,
  Canvas,
  ColorMatrix,
  Group,
  Image,
  rect,
  rrect,
  useImage,
} from '@shopify/react-native-skia';

import type { SkiaImageProps } from './SkiaImage.type';
import { useSkiaImage } from './useSkiaImage';

const SkiaImageComponent = (props: SkiaImageProps) => {
  const {
    blur,
    canvasHeight,
    canvasWidth,
    padding,
    clipPadding,
    clip,
    source,
    filterMatrix,
    clipRadius,
    invertClip,
    imageSizeMode,
  } = useSkiaImage(props);

  const image = useImage(source);
  const imageClipPadding = clipPadding ? clipPadding : padding;

  if (image == null) {
    return null;
  }

  const renderImageView = () => {
    return (
      <Image
        x={padding / 2}
        y={padding / 2}
        width={canvasWidth - padding}
        height={canvasHeight - padding}
        image={image}
        fit={imageSizeMode}
      >
        <Blur blur={blur} mode="clamp">
          <ColorMatrix matrix={filterMatrix} />
        </Blur>
      </Image>
    );
  };

  return (
    <View>
      <Canvas
        style={{
          height: canvasHeight,
          width: canvasWidth,
        }}
        children={
          <>
            {clip ? (
              <Group
                clip={rrect(
                  rect(
                    imageClipPadding * 2,
                    imageClipPadding * 2,
                    canvasHeight - imageClipPadding * 4,
                    canvasHeight - imageClipPadding * 4
                  ),
                  clipRadius,
                  clipRadius
                )}
                invertClip={invertClip}
              >
                {renderImageView()}
              </Group>
            ) : (
              renderImageView()
            )}
          </>
        }
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      />
    </View>
  );
};

export default React.memo(SkiaImageComponent);

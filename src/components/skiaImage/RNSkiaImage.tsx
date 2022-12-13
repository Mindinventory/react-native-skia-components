import React from 'react';
import { View } from 'react-native';

import {
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
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
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

  if (image == null) {
    return null;
  }

  const imageClipPadding = clipPadding ? clipPadding : padding;

  const renderImageView = () => {
    return (
      <Image
        x={padding / 2}
        y={padding / 2}
        width={CANVAS_WIDTH - padding}
        height={CANVAS_HEIGHT - padding}
        image={image}
        fit={imageSizeMode}
      >
        <ColorMatrix matrix={filterMatrix} />
      </Image>
    );
  };

  return (
    <View>
      <Canvas
        style={{
          height: CANVAS_HEIGHT,
          width: CANVAS_WIDTH,
        }}
        children={
          <>
            {clip ? (
              <Group
                clip={rrect(
                  rect(
                    imageClipPadding * 2,
                    imageClipPadding * 2,
                    CANVAS_HEIGHT - imageClipPadding * 4,
                    CANVAS_HEIGHT - imageClipPadding * 4
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

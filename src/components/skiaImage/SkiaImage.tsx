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

const SkiaImage = (props: SkiaImageProps) => {
  const {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    padding,
    source,
    filterMatrix,
    clip,
    clipRadius,
    invertClip,
  } = useSkiaImage(props);

  const image = useImage(source);

  if (image == null) {
    return null;
  }

  return (
    <View>
      <Canvas
        style={{
          height: CANVAS_HEIGHT,
          width: CANVAS_WIDTH,
        }}
        children={
          <>
            {clip || invertClip ? (
              <Group
                clip={rrect(
                  rect(
                    padding * 2,
                    padding * 2,
                    CANVAS_WIDTH - padding * 4,
                    CANVAS_HEIGHT - padding * 4
                  ),
                  clipRadius,
                  clipRadius
                )}
                invertClip={invertClip}
              >
                <Image
                  x={padding / 2}
                  y={padding / 2}
                  width={CANVAS_WIDTH - padding}
                  height={CANVAS_HEIGHT - padding}
                  image={image}
                  fit="cover"
                >
                  <ColorMatrix matrix={filterMatrix} />
                </Image>
              </Group>
            ) : (
              <Image
                x={padding / 2}
                y={padding / 2}
                width={CANVAS_WIDTH - padding}
                height={CANVAS_HEIGHT - padding}
                image={image}
                fit="cover"
              >
                <ColorMatrix matrix={filterMatrix} />
              </Image>
            )}
          </>
        }
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
      />
    </View>
  );
};

export default SkiaImage;

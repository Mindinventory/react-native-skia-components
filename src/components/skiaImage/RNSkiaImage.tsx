import React from 'react';
import { View } from 'react-native';

import {
  Canvas,
  Group,
  rect,
  rrect,
  useImage,
} from '@shopify/react-native-skia';

import { ImageConstant } from './Image.Constant';
import RNImage from './RNImage';
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
      <RNImage
        width={canvasWidth - padding}
        height={canvasHeight - padding}
        x={padding / ImageConstant.operational.paddingDivider}
        y={padding / ImageConstant.operational.paddingDivider}
        blur={blur}
        image={image}
        imageSizeMode={imageSizeMode}
        filterMatrix={filterMatrix}
      />
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
                    imageClipPadding *
                      ImageConstant.operational.groupPositionMultiplier,
                    imageClipPadding *
                      ImageConstant.operational.groupPositionMultiplier,
                    canvasHeight -
                      imageClipPadding *
                        ImageConstant.operational.groupSizeMultiplier,
                    canvasHeight -
                      imageClipPadding *
                        ImageConstant.operational.groupSizeMultiplier
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

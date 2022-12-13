import React from 'react';

import { MiUiProvider } from '../../context';
import SkiaImageComponent from './RNSkiaImage';
import type { SkiaImageProps } from './SkiaImage.type';

export const SkiaImage = (props: SkiaImageProps) => (
  <MiUiProvider>
    <SkiaImageComponent {...props} />
  </MiUiProvider>
);

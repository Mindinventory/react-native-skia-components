import React from 'react';

import { MiUiProvider } from '../../context';
import FancyScrollIndicatorComponent from './fancyScrollIndicator';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

export const FancyScrollIndicator = <T,>(
  props: IFancyScrollIndicatorProp<T>
) => (
  <MiUiProvider>
    <FancyScrollIndicatorComponent {...props} />
  </MiUiProvider>
);

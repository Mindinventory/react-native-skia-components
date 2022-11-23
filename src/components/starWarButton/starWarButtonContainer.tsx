import React from 'react';

import { MiUiProvider } from '../../context';
import { StarWarButtonComponent } from './starWarButton';
import type { StarWarButtonProps } from './starWarButton.type';

const StarWarButton = (props: StarWarButtonProps) => {
  return (
    <MiUiProvider props={props}>
      <StarWarButtonComponent />
    </MiUiProvider>
  );
};

export default StarWarButton;

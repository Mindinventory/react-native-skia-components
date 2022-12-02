import React from 'react';

import { CircularProgressBar } from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';

interface ICircularProgress {
  progress: number;
}
const CircularProgress = ({ progress }: ICircularProgress) => {
  return (
    <CircularProgressBar
      progress={progress}
      shadowColor={miColor.white}
      gradientColors={[miColor.nero]}
    />
  );
};

export default CircularProgress;

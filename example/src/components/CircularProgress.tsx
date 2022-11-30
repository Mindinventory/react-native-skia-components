import React from 'react';

import { CircularProgressBar } from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';

interface ICircularProgress {
  progress: number;
}
const CircularProgress: React.FC<ICircularProgress> = ({ progress }) => {
  return (
    <CircularProgressBar
      progress={progress}
      shadowColor={miColor.white}
      gradientColors={['#292626']}
    />
  );
};

export default CircularProgress;

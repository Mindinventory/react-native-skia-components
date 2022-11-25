import React from 'react';
import { CircularProgressBar } from '@mindinventory/react-native-skia-components';

interface ICircularProgress {
  progress: number;
}
const CircularProgress: React.FC<ICircularProgress> = ({ progress }) => {
  return (
    <CircularProgressBar
      progress={progress}
      shadowColor={'white'}
      gradientColors={['#292626']}
    />
  );
};

export default CircularProgress;

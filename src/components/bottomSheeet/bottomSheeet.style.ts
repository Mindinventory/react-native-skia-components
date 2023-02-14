import { Dimensions, StyleSheet } from 'react-native';

import { miColor } from '../../themes';

const { width, height } = Dimensions.get('window');
export const bottomSheeetStyle = () => {
  return StyleSheet.create({
    bottomSheetWrapper: {
      backgroundColor: miColor.transparentWithBlackShade,
      height: height,
      position: 'absolute',
      width: width,
    },
    canvasStyle: {
      height: height,
      position: 'absolute',
      width: width,
    },
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      width: width,
    },
    gestureHandlerRootViewStyle: {
      height: height,
      width: width,
    },
  });
};

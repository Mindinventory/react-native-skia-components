import { StyleSheet } from 'react-native';

export const styles = (canvasHeight: number, canvasWidth: number) => {
  return {
    canvasStyles: StyleSheet.create({
      canvasContainer: {
        flex: 1,
        marginLeft: canvasHeight * 0.05,
        marginTop: canvasHeight * 0.05,
      },
      canvasStyle: {
        height: canvasHeight,
        width: canvasWidth,
      },
    }),
  };
};

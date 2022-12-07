import { StyleSheet } from 'react-native';

export const indicatorStyle = () => {
  return StyleSheet.create({
    rowContainer: {
      backgroundColor: 'red',
      height: 100,
      margin: 10,
      width: 300,
    },
  });
};

export const scrollIndicatorStyle = (indicatorContainerWidth: number) => {
  return StyleSheet.create({
    indicatorContainer: {
      alignItems: 'center',
      marginLeft: 15,
      marginTop: 5,
      width: indicatorContainerWidth,
    },
  });
};

export const canvasStyle = (
  indicatorHeight: number,
  indicatorContainerWidth: number
) => {
  return StyleSheet.create({
    canvasStyle: {
      height: indicatorHeight,
      marginHorizontal: 40,
      width: indicatorContainerWidth,
    },
  });
};

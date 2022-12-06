import { StyleSheet } from 'react-native';

import { miColor } from '../../themes';

export const circularProgressBarStyle = () => {
  const circle = StyleSheet.create({
    container: {
      height: 358,
      width: 358,
    },
  });

  const itemsExample = StyleSheet.create({
    container: {
      height: 260,
      width: 260,
    },
  });

  const textContainer = StyleSheet.create({
    textStyle: {
      color: miColor.gray,
      fontWeight: 'bold',
    },
    textView: {
      position: 'absolute',
    },
  });

  return {
    circle: circle,
    itemsExample: itemsExample,
    textContainer: { ...textContainer },
  };
};

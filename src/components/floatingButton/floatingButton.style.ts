import { StyleSheet } from 'react-native';

import { miColor } from '../../themes';

export const floatingButtonStyle = () => {
  const textContainer = StyleSheet.create({
    textStyle: {
      color: miColor.gray,
      fontWeight: 'bold',
    },
    textView: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
  });

  const containerStyle = StyleSheet.create({
    canvasStyle: {
      marginVertical: 10,
    },
  });

  return {
    containerStyle,
    textContainer: { ...textContainer },
  };
};

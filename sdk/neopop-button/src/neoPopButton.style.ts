import { StyleSheet } from 'react-native';

export const neoPopButtonStyle = () => {
  const textContainer = StyleSheet.create({
    textStyle: {
      color: 'gray',
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
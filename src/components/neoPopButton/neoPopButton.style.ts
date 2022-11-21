import { StyleSheet } from 'react-native';

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

export default {
  containerStyle,
  textContainer: { ...textContainer },
};

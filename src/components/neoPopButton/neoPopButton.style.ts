import { StyleSheet } from 'react-native';

const textContainer = StyleSheet.create({
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

const containerStyle = StyleSheet.create({
  canvasStyle: {
    marginVertical: 10,
  },
});

export default {
  textContainer: { ...textContainer },
  containerStyle,
};

import { StyleSheet } from 'react-native';

const textContainer = StyleSheet.create({
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  textStyle: {
    color: 'gray',
    fontWeight: 'bold',
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

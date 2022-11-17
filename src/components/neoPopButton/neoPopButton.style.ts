import { StyleSheet } from 'react-native';
import { miColor } from '../../themes';

const textContainer = StyleSheet.create({
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  textStyle: {
    color: miColor.gray,
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

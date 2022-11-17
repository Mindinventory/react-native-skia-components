import { miColor } from '../../themes';
import { StyleSheet } from 'react-native';

const circle = StyleSheet.create({
  container: {
    width: 358,
    height: 358,
  },
});

const itemsExample = StyleSheet.create({
  container: {
    width: 260,
    height: 260,
  },
});

const textContainer = StyleSheet.create({
  textView: {
    position: 'absolute',
  },
  textStyle: {
    fontWeight: 'bold',
    color: miColor.grayShade,
  },
});

export default {
  circle: circle,
  itemsExample: itemsExample,
  textContainer: { ...textContainer },
};

import { StyleSheet } from 'react-native';

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
    color: '#ccc',
    fontWeight: 'bold',
  },
  textView: {
    position: 'absolute',
  },
});

export default {
  circle: circle,
  itemsExample: itemsExample,
  textContainer: { ...textContainer },
};

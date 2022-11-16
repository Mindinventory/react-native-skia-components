import { StyleSheet } from 'react-native';
import { miColor } from '../../themes';

const btnLabel = StyleSheet.create({
  labelView: {
    alignItems: 'center',
    elevation: 2,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    marginTop: 10,
  },
  labelText: {
    color: miColor.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const containerStyle = StyleSheet.create({
  canvasStyle: {
    marginVertical: 10,
  },
});

export default {
  btnLabel,
  containerStyle,
};

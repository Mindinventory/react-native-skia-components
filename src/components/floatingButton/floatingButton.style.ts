import { StyleSheet } from 'react-native';
import { miColor } from '../../themes';

const btnLabel = StyleSheet.create({
  labelView: {
    position: 'absolute',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  labelText: {
    color: miColor.black,
    fontWeight: 'bold',
    fontSize: 30,
  },
  verticalStyle: {
    marginTop: '5%',
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

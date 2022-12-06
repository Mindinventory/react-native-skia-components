import { StyleSheet } from 'react-native';

import { miColor } from '../../themes/miColor';

export const neoPopButtonStyle = () => {
  const btnLabel = StyleSheet.create({
    labelText: {
      color: miColor.black,
      fontSize: 30,
      fontWeight: 'bold',
    },
    labelView: {
      alignItems: 'center',
      elevation: 2,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'absolute',
    },
    loader: {
      backgroundColor: 'black',
      height: 8,
      marginHorizontal: 5,
      width: 8,
    },
    loaderView: {
      flexDirection: 'row',
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

  return {
    btnLabel,
    containerStyle,
  };
};

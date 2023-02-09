import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export const bottomSheeetStyle = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      width: width,
    },
  });
};

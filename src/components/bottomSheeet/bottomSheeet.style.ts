import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export const bottomSheeetStyle = () => {
  return StyleSheet.create({
    bottomSheetContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      bottom: 0,
      elevation: 5,
      justifyContent: 'center',
      left: 0,

      padding: 20,
      position: 'absolute',
      right: 0,
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    container: {
      alignItems: 'center',

      flex: 1,
      justifyContent: 'center',
      width: width,
    },
  });
};

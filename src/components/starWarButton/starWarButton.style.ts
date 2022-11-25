import { StyleSheet } from 'react-native';

export const starWarButtonStyle = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTextView: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 300,
    },
  });
};

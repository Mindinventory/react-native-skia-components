import { StyleSheet } from 'react-native';

export const starWarButtonStyle = () => {
  return StyleSheet.create({
    buttonTextView: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 300,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

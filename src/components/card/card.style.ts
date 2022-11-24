import { StyleSheet } from 'react-native';

export const cardStyle = () => {
  return StyleSheet.create({
    card: {
      overflow: 'hidden',
      position: 'absolute',
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

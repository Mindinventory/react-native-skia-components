import { StyleSheet } from 'react-native';

export const swipeActionButtonStyle = () => {
  return StyleSheet.create({
    activityIndicator: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    customIndicator: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    mainContainer: {
      flexDirection: 'row',
      padding: 2,
    },
    mainContainerCircle: {
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
      zIndex: 2,
    },
    title: {
      color: 'black',
      fontSize: 24,
      textAlign: 'center',
      width: '50%',
    },
    titleContainer: {
      alignItems: 'center',
      bottom: 0,
      flex: 1,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
  });
};

import { StyleSheet } from 'react-native';

export const swiperCardStyle = () => {
  return StyleSheet.create({
    bottomControlContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      height: 80,
      justifyContent: 'space-evenly',
      zIndex: 999,
    },
    cardContainer: {
      alignSelf: 'center',
      elevation: 2,
      position: 'absolute',
      shadowColor: 'black',
      shadowOffset: {
        height: -5,
        width: 0,
      },
      shadowOpacity: 0.6,
      shadowRadius: 6,
    },
    cardImageStyle: {
      borderRadius: 20,
      height: '100%',
      width: '100%',
    },
    cardItemContainer: {
      flexDirection: 'row',
      paddingBottom: 20,
    },
    commonButtonContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255, 0.9)',
      borderRadius: 85,
      height: 85,
      justifyContent: 'center',
      width: 85,
    },
    commonOverlayStyle: {
      borderColor: 'white',
      borderRadius: 10,
      borderWidth: 0,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    controlsContainer: {
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'row',
      height: 70,
      justifyContent: 'space-around',
      marginTop: 10,
    },
    leftOverlayStyle: {
      backgroundColor: '#03AC13',
      left: 15,
      transform: [{ rotate: '-45deg' }],
    },
    mainContainer: { backgroundColor: 'black', height: '100%' },
    overlayButtonContainer: {
      backgroundColor: 'white',
      borderRadius: 60,
      height: 60,
      shadowColor: 'gold',
      shadowOffset: {
        height: -5,
        width: 0,
      },
      shadowOpacity: 0.6,
      shadowRadius: 6,
      width: 60,
    },
    rightOverlayStyle: {
      backgroundColor: '#D0312D',
      right: 15,
      transform: [{ rotate: '45deg' }],
    },
    rootContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      ...StyleSheet.absoluteFillObject,
    },
  });
};

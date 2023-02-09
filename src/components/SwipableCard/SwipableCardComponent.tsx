import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

// import Swiper from 'react-native-deck-swiper';

import type { SwipableCardsProps } from './SwipableCards.type';

const SwipableCardComponent: React.FC<SwipableCardsProps> = ({
  cardHeight = 450,
  cardSpace = 40,
  cardWidth = Dimensions.get('screen').width - cardSpace,
}) => {
  const renderData = new Array(4).fill('');
  const [cardItems, _setCardItems] = useState(renderData);
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    transform: [{ translateX: animatedValue }],
  };

  // const useSwiper = React.useRef(null).current;
  // const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  // const handleOnSwipedTop = () => useSwiper.swipeTop();
  // const handleOnSwipedRight = () => useSwiper.swipeRight();

  const panResponderr = React.useRef(
    PanResponder.create({
      onPanResponderMove: (_e, _gestureState) => {
        // animatedValue.setValue(gestureState.dx);
        Animated.event([null, { dx: animatedValue }]);
      },
      onPanResponderRelease: (_e, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(animatedValue, {
            tension: 1,
            toValue: SCREEN_WIDTH,
            useNativeDriver: true,
          }).start();
        } else if (gestureState.dx < -120) {
          Animated.spring(animatedValue, {
            tension: 1,
            toValue: -SCREEN_WIDTH,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(animatedValue, {
            tension: 1,
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
      onStartShouldSetPanResponder: (_e, gestureState) => {
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
        return true;
      },
    })
  ).current;

  const renderCardItem = () => {
    return (
      <Animated.View>
        <Animated.View
          {...panResponderr.panHandlers}
          style={[
            animatedStyle,
            {
              height: cardHeight,
              marginHorizontal: cardSpace / 2,
              width: cardWidth,
            },
            styles.cardContainer,
          ]}
        >
          <Image
            source={{
              uri: 'https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg',
            }}
            style={[styles.cardImageStyle]}
            resizeMode="cover"
          />
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Swiper
        ref={useSwiper}
        animateCardOpacity
        containerStyle={{}}
        cards={cardItems}
        renderCard={renderCardItem}
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
        infinite
        showSecondCard
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: <OverlayLabel label="NOPE" color="#E5566D" />,
            style: {
              wrapper: styles.overlayWrapper,
            },
          },
          right: {
            title: 'LIKE',
            element: <OverlayLabel label="LIKE" color="#4CCC93" />,
            style: {
              wrapper: {
                ...styles.overlayWrapper,
                alignItems: 'flex-start',
                marginLeft: 30,
              },
            },
          },
        }}
      /> */}
      <View style={styles.cardItemContainer}>
        {cardItems.map(() => {
          return renderCardItem();
        })}
      </View>
      <View
        style={[
          { marginHorizontal: cardSpace / 2, width: cardWidth },
          styles.controlsContainer,
        ]}
      >
        {new Array(3).fill('').map(() => {
          return <View style={styles.overlayButtonContainer} />;
        })}
      </View>
    </View>
  );
};

export default React.memo(SwipableCardComponent);

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 2,
    marginTop: 50,
    shadowColor: 'white',
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
  controlsContainer: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    marginTop: 10,
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
});

import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import CardOverlayContainer from './cardOverlayContainer';
import type { SwipableCardsProps } from './swipableCards.type';
import { useSwipableCardComponent } from './useSwipableCardComponent';

const SwipableCardComponent = (props: SwipableCardsProps) => {
  const {
    animateAllDirection,
    cardHeight,
    cardItems,
    cardStackBottomSpace,
    cardStackTopSpace,
    cardView,
    cardWidth,
    controlViews,
    currentIndex,
    dislikeOverlayOpacity,
    fadeNextCardAnimation,
    getPositionX,
    getPositionY,
    leftOverlapView,
    likeOverlayOpacity,
    nextCardOpactiy,
    nextCardScale,
    onControlPress,
    onPress,
    overlayCardContainerStyle,
    panResponder,
    rightOverlapView,
    rotateCard,
    styles,
  } = useSwipableCardComponent({ props });

  useEffect(() => {
    if (cardStackTopSpace > 0 && cardStackBottomSpace > 0) {
      throw Error('Either space can be added from top or bottom.');
    }
  }, [cardStackBottomSpace, cardStackTopSpace]);

  const renderOverlapCard = () => {
    return (
      <CardOverlayContainer
        overlayCardContainerStyle={overlayCardContainerStyle}
        leftOverlapView={
          <Animated.View
            style={[
              styles.swiperCardStyle.commonOverlayStyle,
              styles.swiperCardStyle.leftOverlayStyle,
              { opacity: likeOverlayOpacity },
            ]}
          >
            {leftOverlapView()}
          </Animated.View>
        }
        rightOverlapView={
          <Animated.View
            style={[
              styles.swiperCardStyle.commonOverlayStyle,
              styles.swiperCardStyle.rightOverlayStyle,
              { opacity: dislikeOverlayOpacity },
            ]}
          >
            {rightOverlapView()}
          </Animated.View>
        }
      />
    );
  };

  const renderCardItem = (item: any, index: number) => {
    const incrementalItem = index + 1;
    const zIndexValue = cardItems.length - incrementalItem + 1;

    if (index < currentIndex) {
      return null;
    } else if (index === currentIndex) {
      return (
        <Animated.View
          {...panResponder.panHandlers}
          key={`child_${index}`}
          style={[
            {
              height: cardHeight,
              transform: [
                { translateX: getPositionX },
                { translateY: animateAllDirection ? getPositionY : 0 },
                { rotate: rotateCard },
              ],
              width: cardWidth,
              zIndex: zIndexValue,
            },
            styles.swiperCardStyle.cardContainer,
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPress && onPress(item)}
          >
            {cardView(item)}
            {renderOverlapCard()}
          </TouchableOpacity>
        </Animated.View>
      );
    } else {
      return (
        <Animated.View
          key={`child_${index}`}
          style={[
            {
              height: cardHeight,
              transform: [{ scale: nextCardScale }],
              width: cardWidth,
              zIndex: zIndexValue - 1,
            },
            fadeNextCardAnimation && { opacity: nextCardOpactiy },
            cardStackTopSpace > 0 && { bottom: cardStackTopSpace + index * 5 },
            cardStackBottomSpace > 0 && {
              top: cardStackBottomSpace + index * 5,
            },
            styles.swiperCardStyle.cardContainer,
          ]}
        >
          {cardView(item)}
        </Animated.View>
      );
    }
  };

  const renderBottomControls = () => {
    return (
      <View
        style={[
          styles.swiperCardStyle.bottomControlContainer,
          {
            marginTop: cardHeight - 45,
            width: cardWidth,
          },
        ]}
      >
        {(controlViews ?? []).map((view: JSX.Element, index: number) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onControlPress && onControlPress(index)}
              style={styles.swiperCardStyle.commonButtonContainer}
            >
              {view}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderLibView = () => {
    return (
      <>
        {renderBottomControls()}
        {cardItems.map((value: any, index: number) =>
          renderCardItem(value, index)
        )}
      </>
    );
  };

  return (
    <View style={styles.swiperCardStyle.rootContainer}>{renderLibView()}</View>
  );
};

export default React.memo(SwipableCardComponent);

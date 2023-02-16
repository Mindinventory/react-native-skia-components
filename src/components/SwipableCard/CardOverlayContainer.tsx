import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { CardOverlayContainerInterface } from './swipableCards.type';

const CardOverlayContainer: React.FC<CardOverlayContainerInterface> = ({
  leftOverlapView,
  overlayCardContainerStyle,
  rightOverlapView,
}) => {
  return (
    <View style={[styles.mainContainer, overlayCardContainerStyle]}>
      {leftOverlapView}
      {rightOverlapView}
    </View>
  );
};

export default CardOverlayContainer;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 120,
    position: 'absolute',
    width: '100%',
  },
});

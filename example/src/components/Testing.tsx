/* eslint-disable no-console */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import SwipeActionButton from './SwipeActionButton';

const Testing = () => {
  const onSwipeEnd = () => {
    console.log('onSwipeEnd');
  };
  const onSwipeStart = () => {
    console.log('onSwipeStart');
  };

  return (
    <View style={styles.mainView}>
      <SwipeActionButton
        title="Swipe right"
        titleStyles={styles.buttonTextStyle}
        titleShown={true}
        titleAnimEnabled={true}
        onSwipeStart={onSwipeStart}
        onSwipeEnd={onSwipeEnd}
      />
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({
  buttonTextStyle: { color: 'red', fontSize: 20 },
  mainView: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

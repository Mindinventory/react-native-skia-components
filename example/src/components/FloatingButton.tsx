/* eslint-disable no-console */
import React from 'react';
import { StyleSheet } from 'react-native';

import { FloatingButton } from '@mindinventory/react-native-skia-components';

const FloatingButtonExample = () => {
  return (
    <FloatingButton
      width={220}
      height={50}
      title="PRESS ME"
      bottomShadowColor={'gray'}
      textStyle={styles.floatingTextStyle}
      onPress={() => {
        console.log('floating onPress');
      }}
      onPressIn={() => {
        console.log('floating onPressIn');
      }}
      onPressOut={() => {
        console.log('floating onPressOut');
      }}
      onLongPress={() => {
        console.log('floating onLongPress');
      }}
    />
  );
};

export default FloatingButtonExample;

const styles = StyleSheet.create({
  floatingTextStyle: {
    fontSize: 24,
  },
});

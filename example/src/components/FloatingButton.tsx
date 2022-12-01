import React from 'react';
import { StyleSheet } from 'react-native';

import { NeoPopButton } from '@mindinventory/react-native-skia-components';

const FloatingButtonExample = () => {
  return (
    <NeoPopButton
      width={220}
      height={50}
      title="PRESS ME"
      bottomShadowColor={'gray'}
      textStyle={styles.floatingTextStyle}
      onPress={() => {}}
      onLongPress={() => {}}
    />
  );
};

export default FloatingButtonExample;

const styles = StyleSheet.create({
  floatingTextStyle: {
    fontSize: 24,
  },
});

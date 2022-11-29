/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';

import { FloatingButton } from '@mindinventory/react-native-skia-components';

import { styles } from './componentStyle.style';

const NeoPopButton = () => {
  return (
    <View style={[styles.centerItemStyle]}>
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
    </View>
  );
};
export default NeoPopButton;

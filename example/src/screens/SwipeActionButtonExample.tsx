import React from 'react';
import { View } from 'react-native';

import { SwipeActionButton } from '@mindinventory/react-native-skia-components';

import { styles } from './componentStyle.style';

const SwipeActionButtonExample = () => {
  return (
    <View style={styles.centerItemStyle}>
      <SwipeActionButton />
    </View>
  );
};

export default SwipeActionButtonExample;

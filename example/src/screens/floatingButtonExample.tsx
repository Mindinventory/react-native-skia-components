import React from 'react';
import { View } from 'react-native';

import { FloatingButton } from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';
import { styles } from './componentStyle.style';

const FloatingButtonExample = () => {
  return (
    <View style={styles.centerItemStyle}>
      <FloatingButton
        width={220}
        height={50}
        title="PRESS ME"
        bottomShadowColor={miColor.lightGray}
        textStyle={styles.floatingTextStyle}
        backgroundColor={miColor.yellowGold}
        onPress={() => {}}
      />
    </View>
  );
};
export default FloatingButtonExample;

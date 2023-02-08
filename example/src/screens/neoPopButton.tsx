import React, { useState } from 'react';
import { View } from 'react-native';

import { NeoPopButton } from '@mindinventory/react-native-skia-components';

import { styles } from './componentStyle.style';
import { miColor } from '../constant/colors';

let timeout: any;

const NeoPopButtonExample = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={[styles.centerItemStyle]}>
      <NeoPopButton
        width={220}
        height={50}
        title="PRESS ME"
        bottomShadowColor={miColor.lightGray}
        textStyle={styles.floatingTextStyle}
        backgroundColor={miColor.yellowGold}
        onPress={() => {
          if (timeout) {
            clearTimeout(timeout);
          }

          setPressed(true);
          timeout = setTimeout(() => {
            setPressed(false);
          }, 2000);
        }}
        disabled={pressed}
      />
    </View>
  );
};
export default NeoPopButtonExample;

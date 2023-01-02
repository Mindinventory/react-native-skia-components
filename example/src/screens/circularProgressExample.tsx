import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import {
  CircularProgressBar,
  NeoPopButton,
} from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';
import { styles } from './componentStyle.style';

const CircularProgressExample = () => {
  const [state, setState] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <CircularProgressBar progress={state} />
      </View>
      <NeoPopButton
        title="Increment + 5"
        preset="floating"
        onPress={() => setState((prev) => prev + 5)}
        bottomShadowColor={'rgb(48,79,14)'}
        textStyle={[
          styles.floatingTextStyle,
          { color: miColor.bluishGrayLight },
        ]}
        backgroundColor={'black'}
        sideShadowColor={'rgb(78,132,14)'}
        width={220}
        height={50}
        strokes
      />
    </ScrollView>
  );
};

export default CircularProgressExample;

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FloatingButton } from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';

const FloatingButtonExample = () => {
  return (
    <View style={styles.container}>
      <FloatingButton
        width={220}
        height={50}
        title="PRESS ME"
        bottomShadowColor={'gray'}
        textStyle={styles.floatingTextStyle}
        sideShadowColor={'red'}
        onPress={() => {}}
        onLongPress={() => {}}
      />
    </View>
  );
};

export default FloatingButtonExample;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: miColor.darkBlack,
    flex: 1,
    justifyContent: 'center',
  },
  floatingTextStyle: {
    fontSize: 24,
  },
});

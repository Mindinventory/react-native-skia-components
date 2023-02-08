import React from 'react';
import { StyleSheet, View } from 'react-native';

import { BottomSheeet } from '@mindinventory/react-native-skia-components';

const BottomSheeetExample = () => {
  return (
    <View style={styles.container}>
      <BottomSheeet />
    </View>
  );
};

export default BottomSheeetExample;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

import React from 'react';
import { Text, View } from 'react-native';

import { useBottomSheeet } from './useBottomSheeet';

const BottomSheeet = () => {
  const { styles } = useBottomSheeet();
  return (
    <View style={styles.bottomSheeetStyle.container}>
      <Text>BottomSheeet</Text>
    </View>
  );
};

export default BottomSheeet;

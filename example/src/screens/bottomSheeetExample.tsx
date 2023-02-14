import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { BottomSheeet } from '@mindinventory/react-native-skia-components';

const BottomSheeetExample = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Button
        title="Open"
        onPress={() => setIsBottomSheetOpen(!isBottomSheetOpen)}
      />

      <BottomSheeet isVisible={isBottomSheetOpen}>
        <View>
          <Text>Bottom sheet example</Text>
        </View>
      </BottomSheeet>
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

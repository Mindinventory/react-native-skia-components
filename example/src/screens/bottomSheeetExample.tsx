import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { BottomSheeet } from '@mindinventory/react-native-skia-components';

const BottomSheeetExample = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  const onCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={() => setIsBottomSheetOpen(true)} />

      <BottomSheeet onClose={onCloseBottomSheet} isVisible={isBottomSheetOpen}>
        <View style={styles.bottomSheetContainer}>
          <Button title="Close" onPress={() => setIsBottomSheetOpen(false)} />
        </View>
      </BottomSheeet>
    </View>
  );
};

export default BottomSheeetExample;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

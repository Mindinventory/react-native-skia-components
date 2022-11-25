import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@mindinventory/react-native-skia-components';

const FloatingButton = () => {
  return (
    <>
      <Button
        preset="floating"
        width={250}
        height={65}
        title="PRESS ME"
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
    </>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  floatingTextStyle: {
    fontSize: 24,
  },
});

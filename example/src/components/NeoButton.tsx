import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@mindinventory/react-native-skia-components';

interface INeoButtonProps {
  index: number;
}
const NeoButton: React.FC<INeoButtonProps> = ({ index }) => {
  return (
    <Button
      width={80}
      height={80}
      title={`${index + 1}`}
      sideShadowColor={'red'}
      bottomShadowColor={'green'}
      backgroundColor={'#f96b8f'}
      textStyle={styles.neoBtnTextStyle}
      onPress={() => {
        console.log('NeoPop onPress');
      }}
      onPressIn={() => {
        console.log('NeoPop onPressIn');
      }}
      onPressOut={() => {
        console.log('NeoPop onPressOut');
      }}
      onLongPress={() => {
        console.log('NeoPop onLongPress');
      }}
    />
  );
};

export default NeoButton;

const styles = StyleSheet.create({
  neoBtnTextStyle: { color: 'white' },
});

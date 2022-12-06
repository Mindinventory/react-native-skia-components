import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';

interface INeoButtonProps {
  index: number;
}
const NeoButton: React.FC<INeoButtonProps> = ({ index }) => {
  return (
    <Button
      width={80}
      height={80}
      title={`${index + 1}`}
      sideShadowColor={miColor.red}
      bottomShadowColor={miColor.green}
      backgroundColor={miColor.lightPink}
      textStyle={styles.neoBtnTextStyle}
      onPress={() => {}}
      onLongPress={() => {}}
    />
  );
};

export default NeoButton;

const styles = StyleSheet.create({
  neoBtnTextStyle: {
    color: miColor.white,
  },
});

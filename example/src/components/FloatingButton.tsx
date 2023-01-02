import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FloatingButton } from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';

const FloatingButtonExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flatButton}>
        <FloatingButton
          width={220}
          height={50}
          title="PRESS ME"
          bottomShadowColor={'rgba(63, 105, 21, 1)'}
          textStyle={styles.floatingTextStyle}
          sideShadowColor={'rgba(98, 159, 37, 1)'}
          backgroundColor={miColor.black}
          buttonType={'flat'}
        />
      </View>
      <View style={styles.flatButton}>
        <FloatingButton
          width={220}
          height={50}
          title="PRESS ME"
          bottomShadowColor={'rgba(63, 105, 21, 1)'}
          textStyle={styles.floatingTextStyle}
          sideShadowColor={'rgba(98, 159, 37, 1)'}
          backgroundColor={miColor.black}
          buttonType={'flatStrokes'}
          strokeColor={miColor.white}
        />
      </View>

      <FloatingButton
        width={220}
        height={50}
        title="PRESS ME"
        bottomShadowColor={'rgba(63, 105, 21, 1)'}
        textStyle={styles.floatingTextStyle}
        sideShadowColor={'rgba(98, 159, 37, 1)'}
        backgroundColor={miColor.black}
        buttonType={'elevated'}
      />

      <FloatingButton
        width={220}
        height={50}
        title="PRESS ME"
        bottomShadowColor={'rgba(63, 105, 21, 1)'}
        textStyle={styles.floatingTextStyle}
        sideShadowColor={'rgba(98, 159, 37, 1)'}
        backgroundColor={miColor.black}
        buttonType={'elevatedStrokes'}
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
  flatButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(61, 61, 61, 1)',
    justifyContent: 'center',
    marginVertical: 5,
  },
  floatingTextStyle: {
    fontSize: 24,
  },
});

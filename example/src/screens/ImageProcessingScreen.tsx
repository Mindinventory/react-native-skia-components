/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Image } from '@mindinventory/react-native-skia-components';

const ImageProcessingScreen: React.FC = () => {
  let arrayRow1 = [0.393, 0.769, 0.189, 0, 0];
  let arrayRow2 = [0.349, 0.686, 0.168, 0, 0];
  let arrayRow3 = [0.272, 0.534, 0.131, 0, 0];
  let arrayRow4 = [0, 0, 0, 1, 0];

  const [colorMatrixValue, setColorMatrixValue] = useState(
    arrayRow1.concat(arrayRow2, arrayRow3, arrayRow4)
  );
  /*
    [r g b a offset]
    [r g b a offset]
    [r g b a offset]
    [r g b a offset]
  */

  // console.log('>>>>>', Math.floor(Math.random() * 100 + 0.5));

  setTimeout(() => {
    arrayRow1 = [1, 0, 0, 0, 0];
    arrayRow2 = [-0.4, 1.3, -0.4, 0.2, -0.1];
    arrayRow3 = [0, 0, 1, 0, 0];
    arrayRow4 = [0, 0, 0, 1, 0];
    /* [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        1, 1, 1, 0, 0,
        0, 0, 0, 1, 0
      ] */
    setColorMatrixValue(arrayRow1.concat(arrayRow2, arrayRow3, arrayRow4));
  }, 2500);

  return (
    <View style={styles.container}>
      <Image
        height={300}
        width={300}
        blur={0}
        source={
          'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg'
        }
        filterMatrix={colorMatrixValue}
        imageSizeMode="fill"
      />
      <Pressable
        style={{ backgroundColor: 'black', padding: 10, borderRadius: 10 }}
        // onPress={() => {
        // arrayRow1 = [random_rgba(), 0, random_rgba(), 0, 0];
        // arrayRow2 = [0, random_rgba(), -0.4, 0.2, -0.1];
        // arrayRow3 = [-0.4, 1.3, -0.4, 0.2, -0.1];
        // arrayRow4 = [random_rgba(), random_rgba(), random_rgba(), 1, 0];
        // setColorMatrixValue(
        //   arrayRow1.concat(arrayRow2, arrayRow3, arrayRow4)
        // );
        // }}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>Random Color</Text>
      </Pressable>
    </View>
  );
};

export default ImageProcessingScreen;

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

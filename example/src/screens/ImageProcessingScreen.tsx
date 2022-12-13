import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  ImageColorMatrix,
  SkiaImage,
} from '@mindinventory/react-native-skia-components';

const ImageProcessingScreen = () => {
  return (
    <View style={styles.container}>
      <SkiaImage
        height={300}
        width={300}
        source={
          'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg'
        }
        filterMatrix={ImageColorMatrix.SEPIA}
        clip={true}
        invertClip={true}
        clipRadius={10}
        clipPadding={30}
        imageSizeMode="fill"
      />
    </View>
  );
};

export default ImageProcessingScreen;

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

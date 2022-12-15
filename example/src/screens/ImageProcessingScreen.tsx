import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Image } from '@mindinventory/react-native-skia-components';

const ImageProcessingScreen: React.FC = () => {
  let arrayRow1 = [1, 0, 0, 0, 0];
  let arrayRow2 = [-0.4, 1.3, -0.4, 0.2, -0.1];
  let arrayRow3 = [0, 0, 1, 0, 0];
  let arrayRow4 = [0, 0, 0, 1, 0];

  return (
    <View style={styles.container}>
      <Image
        height={300}
        width={300}
        blur={2}
        invertClip={false}
        clip
        clipRadius={10}
        source={
          'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg'
        }
        filterMatrix={arrayRow1.concat(arrayRow2, arrayRow3, arrayRow4)}
        imageSizeMode="fill"
      />
    </View>
  );
};

export default ImageProcessingScreen;

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

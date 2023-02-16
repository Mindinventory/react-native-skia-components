import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { SwipableCard } from '@mindinventory/react-native-skia-components';

const renderCardItem = (item: any) => {
  const { imageUrl } = item || {};
  return (
    <Image
      source={{
        uri: imageUrl,
      }}
      style={[styles.cardImageStyle]}
      resizeMode="cover"
    />
  );
};

const SwipableExampleScreen = () => {
  let renderCardItemData = [
    {
      id: 0,
      imageUrl: 'https://i.imgur.com/OB0y6MR.jpg',
    },
    {
      id: 1,
      imageUrl:
        'https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg',
    },
    {
      id: 2,
      imageUrl:
        'https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg',
    },
    {
      id: 3,
      imageUrl: 'https://i.imgur.com/CzXTtJV.jpg',
    },
    {
      id: 4,
      imageUrl:
        'https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg',
    },
  ];

  return (
    <View style={styles.rootContainer}>
      <SwipableCard
        data={renderCardItemData}
        cardView={renderCardItem}
        // eslint-disable-next-line react/no-unstable-nested-components
        leftOverlapView={() => (
          <Text style={styles.leftOverlayTextStyle}>Like</Text>
        )}
        // eslint-disable-next-line react/no-unstable-nested-components
        rightOverlapView={() => (
          <Text style={styles.rightOverlayTextStyle}>Nup</Text>
        )}
      />
    </View>
  );
};

export default SwipableExampleScreen;

const styles = StyleSheet.create({
  cardImageStyle: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  containerItem: { height: '100%', width: '100%' },
  leftOverlayTextStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
  },
  rightOverlayTextStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
  },
  rootContainer: { flex: 1 },
});

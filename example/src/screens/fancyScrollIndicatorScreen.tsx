import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Card,
  FancyScrollIndicator,
} from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';
import { bullets } from '../constant/constant';

const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get('screen');

const FancyScrollIndicatorScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <FancyScrollIndicator
          data={new Array(3).fill(' ')}
          horizontal
          renderItem={({ index }) => {
            return (
              <Card
                height={190}
                width={DEVICE_WIDTH - 40}
                borderWidth={5}
                style={styles.card}
                blur={16}
                animation={'bounce'}
                borderColors={[miColor.bluishGray, miColor.gray]}
                animateBorder={'yoyo'}'
                '
              >
                <ImageBackground
                  source={{
                    uri: 'https://cdn.dribbble.com/users/1233499/screenshots/15300502/media/8d39c3d799dba2b2f4926cce616c119b.png',
                  }}
                  style={styles.cardContain}
                  resizeMode={'cover'}
                >
                  <View style={styles.cardStyle}>
                    <Text style={styles.cardNumber}>
                      {bullets}
                      {bullets}
                      {bullets}
                      {bullets}
                      {'\t'}
                      <Text style={styles.cardText}>5008</Text>
                    </Text>
                    <Text style={styles.cardText}>Mindinventory</Text>
                  </View>
                  <Text style={styles.cardNumber}>Card {index + 1}</Text>
                </ImageBackground>
              </Card>
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default FancyScrollIndicatorScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: miColor.transparent,
  },
  cardContain: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  cardNumber: {
    color: miColor.white,
    fontSize: 25,
    fontWeight: '400',
  },
  cardStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardText: {
    color: miColor.white,
    fontSize: 20,
    fontWeight: 'normal',
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: DEVICE_HEIGHT / 4,
  },
});

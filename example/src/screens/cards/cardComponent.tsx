import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Card } from '@mindinventory/react-native-neopop';

const CardComponent = () => {
  return (
    <ScrollView
      scrollEnabled
      // horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <View style={styles.flexDirectionRow}>
        <Card
          height={220}
          width={310}
          borderWidth={5}
          // borderColors={['cyan', 'red', 'red', 'cyan']}
          animation={'BOUNCE'}
          style={styles.card}
          animateBorder={'NORMAL'}
        >
          <View style={styles.cardStyle}>
            <Text style={styles.cardNumber}>
              5499 &nbsp; 5008 &nbsp; 9101 &nbsp; 1123
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.validText}>Valid Till</Text>
              <Text style={styles.timeText}>12/25</Text>
            </View>
            <Text style={styles.carNameText}>Mindinventory</Text>
          </View>
        </Card>
        <Card
          height={220}
          width={310}
          borderWidth={5}
          borderColors={[
            '#FF9933',
            '#FF9933',
            '#FFFFFF',
            '#FFFFFF',
            '#138808',
            '#138808',
            '#FF9933',
          ]}
          animation={'ROTATE'}
          style={styles.card}
          animateBorder={'YOYO'}
        >
          <View style={styles.cardStyle}>
            <Text style={styles.cardNumber}>
              5499 &nbsp; 5008 &nbsp; 9101 &nbsp; 1123
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.validText}>Valid Till</Text>
              <Text style={styles.timeText}>12/25</Text>
            </View>
            <Text style={styles.carNameText}>Mindinventory</Text>
          </View>
        </Card>
        <Card
          height={220}
          width={310}
          borderWidth={5}
          // borderColors={['cyan', 'red', 'red', 'cyan']}
          // animation={'ROTATE'}
          animateBorder={'NONE'}
        >
          <ImageBackground
            source={{
              uri: 'https://source.unsplash.com/random/1920x1080/?debitcard',
            }}
            style={[styles.cardStyle]}
          >
            <View style={styles.imageView}>
              <Text style={styles.cardNumber}>
                5499 &nbsp; 5008 &nbsp; 9101 &nbsp; 1123
              </Text>
              <View style={styles.dateContainer}>
                <Text style={styles.validText}>Valid Till</Text>
                <Text style={styles.timeText}>12/25</Text>
              </View>
              <Text style={styles.carNameText}>Mindinventory</Text>
            </View>
          </ImageBackground>
        </Card>
      </View>
    </ScrollView>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    padding: 5,
  },
  cardNumber: {
    color: 'gold',
    fontSize: 22,
  },
  cardStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  carNameText: {
    color: 'gold',
    fontSize: 15,
    marginTop: 0,
  },
  centerItemStyle: {
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'black',
    marginTop: 50,
  },
  dateContainer: {
    marginVertical: 20,
  },
  flexDirectionRow: {
    alignSelf: 'center',
    // flexDirection: 'row',
  },
  image: {
    alignSelf: 'center',
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  imageView: {
    padding: 5,
  },
  timeText: {
    color: 'gold',
    fontSize: 15,
  },
  validText: {
    color: 'gold',
    fontSize: 10,
  },
});

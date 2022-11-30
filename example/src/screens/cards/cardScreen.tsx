/* eslint-disable no-console */
import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Card,
  FloatingButton,
} from '@mindinventory/react-native-skia-components';

const { width } = Dimensions.get('window');

const cardItems = [
  {
    title: 'Card title 1',
    animation: 'ROTATE',
    animateBorder: 'NORMAL',
  },
  {
    title: 'Card title 2',
    animation: 'BOUNCE',
    animateBorder: 'YOYO',
  },
  {
    title: 'Card title 3',
    animation: 'NONE',
    animateBorder: 'DISCO',
  },
];

const CardItems = ({ flatListRef }) => {
  return (
    <FlatList
      horizontal
      data={cardItems}
      keyExtractor={(_item, index) => index.toString()}
      style={{
        width: width * 0.91,
        maxHeight: 250,
      }}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 250,
      }}
      ref={flatListRef}
      getItemLayout={(data, index) => ({
        length: 350,
        offset: 350 * index,
        index,
      })}
      renderItem={({ item, index }) => {
        return (
          <Card
            height={180}
            width={310}
            borderWidth={5}
            animation={item.animation}
            style={styles.card}
            animateBorder={item.animateBorder}
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
                  {'\u2022'}
                  {'\u2022'}
                  {'\u2022'}
                  {'\u2022'}
                  {'\t'}
                  <Text style={styles.cardText}>5008</Text>
                </Text>
                <Text style={styles.cardText}>Mindinventory</Text>
              </View>
            </ImageBackground>
          </Card>
        );
      }}
    />
  );
};

const CardScreen = () => {
  const flatListRef = useRef(null);
  let indexes = 0;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContain}
        nestedScrollEnabled
      >
        <Text style={styles.headText}>
          Give Your {'\n'}Banking card{'\n'}a{' '}
          <Text style={styles.newLook}>New Look</Text>
        </Text>
        <CardItems flatListRef={flatListRef} />
        {/* <Card
          height={180}
          width={310}
          borderWidth={5}
          animation={'ROTATE'}
          style={styles.card}
          animateBorder={'DISCO'}
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
                {'\u2022'}
                {'\u2022'}
                {'\u2022'}
                {'\u2022'}
                {'\t'}
                <Text style={styles.cardText}>5008</Text>
              </Text>
              <Text style={styles.cardText}>Mindinventory</Text>
            </View>
          </ImageBackground>
        </Card> */}
        <Text style={styles.chooseCardText}>Choose a Card</Text>
        <FloatingButton
          width={220}
          height={50}
          title="NEXT CARD"
          bottomShadowColor={'gray'}
          textStyle={styles.floatingTextStyle}
          onPress={() => {
            console.log('floating onPress');

            console.log('indexes: ', indexes);

            console.log('cardItems: ', cardItems.length);
            if (indexes === cardItems.length - 1) {
              indexes = 0;
            } else {
              indexes++;
            }

            if (flatListRef) {
              flatListRef.current.scrollToIndex({
                animated: true,
                index: indexes,
                viewOffset: 0,
              });
            }
          }}
          floatAnimation={true}
          duration={1000}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    flex: 0,
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff00',
  },
  cardContain: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  cardNumber: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '400',
  },
  cardStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'normal',
  },
  chooseCardText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
  },
  floatingTextStyle: {
    fontSize: 12,
  },
  headText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '300',
  },
  helloText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  newLook: {
    color: '#d29cf8',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  scrollContain: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
});

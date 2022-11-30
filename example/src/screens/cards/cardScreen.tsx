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
  NeoPopButton,
} from '@mindinventory/react-native-skia-components';

import { miColor } from '../../constant/colors';

const { width } = Dimensions.get('window');

const cardItems = [
  {
    animateBorder: 'normal',
    animation: 'rotate',
    title: 'Card title 1',
  },
  {
    animateBorder: 'yoyo',
    animation: 'bounce',
    title: 'Card title 2',
  },
  {
    animateBorder: 'disco',
    animation: 'none',
    title: 'Card title 3',
  },
];

type CARDITEMS = {
  animateBorder: 'normal' | 'yoyo' | 'none' | 'disco';
  animation: 'rotate' | 'none' | 'bounce';
  title: string;
};

const CardItems = ({ flatListRef }) => {
  return (
    <FlatList
      horizontal
      data={cardItems}
      keyExtractor={(_item, index) => index.toString()}
      style={styles.listItemStyle}
      contentContainerStyle={styles.contentListItem}
      ref={flatListRef}
      getItemLayout={(_data, index) => ({
        index,
        length: 350,
        offset: 350 * index,
      })}
      renderItem={({ item }: { item: CARDITEMS }) => {
        return (
          <Card
            height={180}
            width={310}
            borderWidth={5}
            animation={item.animation}
            style={styles.card}
            animateBorder={item.animateBorder}
            blur={10}
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
  const flatListRef = useRef<FlatList>();
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

        <Text style={styles.chooseCardText}>Choose a Card</Text>
        <NeoPopButton
          width={220}
          height={50}
          title="NEXT CARD"
          bottomShadowColor={miColor.gray}
          textStyle={styles.floatingTextStyle}
          onPress={() => {
            if (indexes === cardItems.length - 1) {
              indexes = 0;
            } else {
              indexes++;
            }

            if (flatListRef) {
              flatListRef.current &&
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
  chooseCardText: {
    color: miColor.white,
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: miColor.black,
    flex: 1,
    justifyContent: 'center',
  },
  contentListItem: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 250,
  },
  floatingTextStyle: {
    fontSize: 12,
  },
  headText: {
    color: miColor.white,
    fontSize: 40,
    fontWeight: '300',
  },
  helloText: {
    color: miColor.white,
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  listItemStyle: {
    maxHeight: 250,
    width: width * 0.91,
  },
  newLook: {
    color: miColor.indigo,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  scrollContain: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
});

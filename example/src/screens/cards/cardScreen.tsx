import React, { useRef } from 'react';
import {
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
import { bullets } from '../../constant/constant';

const data = new Array(3);

type CardItems = {
  animateBorder: string;
  animation: string;
  title: string;
};

const CardItems = ({ flatListRef }: any) => {
  const renderItem = () => {
    return (
      <>
        <Card
          height={180}
          width={310}
          borderWidth={5}
          style={styles.card}
          blur={20}
          animation={'bounce'}
          borderColors={[miColor.bluishGray, miColor.gray]}
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
          </ImageBackground>
        </Card>
        <Card
          height={180}
          width={310}
          borderWidth={5}
          style={styles.card}
          blur={10}
          borderColors={[miColor.black, miColor.red]}
        >
          <ImageBackground
            source={{
              uri: 'https://cdn.dribbble.com/userupload/3687484/file/original-d7a21496147ff53566f169184d6a8d47.png?compress=1&resize=1024x768&vertical=center',
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
          </ImageBackground>
        </Card>
        <Card
          height={180}
          width={310}
          borderWidth={5}
          style={styles.card}
          blur={15}
          animation={'none'}
          animateBorder={'normal'}
        >
          <ImageBackground
            source={{
              uri: 'https://cdn.dribbble.com/userupload/3154457/file/original-0ac7ee3314f9e2cc3c31843e6b8befa4.png?compress=1&resize=1024x768&vertical=center',
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
          </ImageBackground>
        </Card>
      </>
    );
  };

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(_item, index) => index.toString()}
      style={styles.listItemStyle}
      contentContainerStyle={styles.contentListItem}
      ref={flatListRef}
      getItemLayout={(_data, index) => ({
        index,
        length: 350,
        offset: 350 * index,
      })}
      renderItem={renderItem}
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
        {CardItems({ flatListRef })}

        <Text style={styles.chooseCardText}>Choose a Card</Text>
        <NeoPopButton
          width={220}
          height={50}
          title="NEXT CARD"
          bottomShadowColor={miColor.lightGray}
          textStyle={styles.floatingTextStyle}
          onPress={() => {
            if (indexes === data.length - 1) {
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
    backgroundColor: miColor.blackShade,
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
  },
  newLook: {
    color: miColor.indigo,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  scrollContain: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: '5%',
  },
});

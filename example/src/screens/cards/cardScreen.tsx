/* eslint-disable no-console */
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button, Card } from '@mindinventory/react-native-neopop';

const CardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContain}>
        {/* <Text style={styles.helloText}>Hello Mindinventory</Text> */}
        <Text style={styles.headText}>
          Give Your {'\n'}Banking card{'\n'}a{' '}
          <Text style={styles.newLook}>New Look</Text>
        </Text>
        <Card
          height={180}
          width={310}
          borderWidth={5}
          // borderColors={['cyan', 'red', 'red', 'cyan']}
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
        </Card>
        <Text style={styles.chooseCardText}>Choose a Card</Text>
        <Button
          preset="floating"
          width={220}
          height={50}
          title={'Next Card'}
          bottomShadowColor={'gray'}
          onPress={() => {
            console.log('floating onPress');
          }}
          onPressIn={() => {
            console.log('floating onPressIn');
          }}
          onPressOut={() => {
            console.log('floating onPressOut');
          }}
          onLongPress={() => {
            console.log('floating onLongPress');
          }}
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
    // opacity: 0.5,
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
    // color: '#e5003e',
    color: '#d29cf8',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  scrollContain: {
    flexGrow: 1,
    // backgroundColor: 'black',
    justifyContent: 'space-evenly',
  },
});

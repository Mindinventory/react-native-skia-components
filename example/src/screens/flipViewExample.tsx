import React, { useRef } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  FlipView,
  FlipViewRef,
} from '@mindinventory/react-native-skia-components';

import { miColor } from '../constant/colors';

const { width, height } = Dimensions.get('window');

const FlipViewExample = () => {
  const flipRef = useRef<FlipViewRef>(null);

  return (
    <ScrollView contentContainerStyle={styles.contain} bounces={false}>
      <FlipView
        style={styles.cardContainer}
        flipDirection={'horizontal'}
        flipZoom={0.1}
        ref={flipRef}
        frontView={
          <View style={styles.cardContain}>
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/userupload/2432734/file/original-41ed58712d7174189914d9e8d267302e.jpg?compress=1&resize=752x',
              }}
              style={styles.image}
              resizeMode={'cover'}
            />
            <View style={styles.textView}>
              <Text>
                {'\n'}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, fugit! At alias maiores ipsa facere quisquam nulla
                amet cupiditate fugiat reiciendis, animi nobis voluptatibus id
                provident illum dignissimos iure est!
              </Text>
              <Text>
                {'\n'}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, fugit! At alias maiores ipsa facere quisquam nulla
                amet cupiditate fugiat reiciendis, animi nobis voluptatibus id
                provident illum dignissimos iure est!
              </Text>
              <Text>
                {'\n'}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, fugit! At alias maiores ipsa facere quisquam nulla
                amet cupiditate fugiat reiciendis, animi nobis voluptatibus id
                provident illum dignissimos iure est!
              </Text>
            </View>
          </View>
        }
        backView={
          <View style={styles.cardContain}>
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/users/1233499/screenshots/15300502/media/8d39c3d799dba2b2f4926cce616c119b.png',
              }}
              style={styles.image}
              resizeMode={'cover'}
            />
            <View style={styles.textView}>
              <Text>
                {'\n'}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, fugit! At alias maiores ipsa facere quisquam nulla
                amet cupiditate fugiat reiciendis, animi nobis voluptatibus id
                provident illum dignissimos iure est!
              </Text>

              <Text>
                {'\n'}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, fugit! At alias maiores ipsa facere quisquam nulla
                amet cupiditate fugiat reiciendis, animi nobis voluptatibus id
                provident illum dignissimos iure est!
              </Text>
              <Text>
                {'\n'}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, fugit! At alias maiores ipsa facere quisquam nulla
                amet cupiditate fugiat reiciendis, animi nobis voluptatibus id
                provident illum dignissimos iure est!
              </Text>
            </View>
          </View>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height * 0.7,
    padding: 5,
  },
  cardContain: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: height * 0.7,
    width: width * 0.8,
  },
  cardContainer: {
    height: width / 2,
    marginHorizontal: 8,
    marginVertical: 12,
    width: width / 2 - 20,
  },
  cardNumber: {
    color: miColor.gold,
    fontSize: 22,
  },
  cardStyle: {
    backgroundColor: 'black',
    height: height * 0.7,
    justifyContent: 'space-around',
    width: width * 0.7,
  },
  carNameText: {
    color: miColor.gold,
    fontSize: 15,
    marginTop: 0,
  },
  centerItemStyle: {
    alignSelf: 'center',
  },
  contain: {
    alignItems: 'center',
    backgroundColor: miColor.circleBackground,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: miColor.black,
    justifyContent: 'center',
  },
  dateContainer: {
    marginVertical: 20,
  },
  flexDirectionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '40%',
    width: '100%',
  },
  imageView: {
    padding: 5,
  },
  textView: {
    paddingHorizontal: 15,
  },
  timeText: {
    color: miColor.gold,
    fontSize: 15,
  },
  validText: {
    color: miColor.gold,
    fontSize: 10,
  },
});
export default FlipViewExample;

import React, { useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FlipView, FlipViewRef } from '@mindinventory/react-native-flip-view';

import { miColor } from '../constant/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constant/constant';

const FlipViewExample = () => {
  const flipRef = useRef<FlipViewRef>(null);

  const renderFlipCardComponent = () => {
    return (
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
                {'\n'}In general, AI systems work by ingesting large amounts of
                labeled training data, analyzing the data for correlations and
                patterns, and using these patterns to make predictions about
                future states. In this way, a chatbot that is fed examples of
                text chats can learn to produce lifelike exchanges with people,
                or an image recognition tool can learn to identify and describe
                objects in images by reviewing millions of examples!
              </Text>
              <Text>
                {'\n'}Learning processes. This aspect of AI programming focuses
                on acquiring data and creating rules for how to turn the data
                into actionable information. The rules, which are called
                algorithms!
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
                {'\n'}UI design and UX design are two of the most often confused
                and conflated terms in web and app design. And understandably
                so. They’re usually placed together in a single term, UI/UX
                design, and viewed from the surface they seem to be describing
                the same thing. It’s often hard to find solid descriptions of
                the two that don’t descend too far into jargon. But fear not!
              </Text>

              <Text>
                {'\n'}“UX” stands for “user experience.” A user’s experience of
                the app is determined by how they interact with it. Is the
                experience smooth and intuitive or clunky and confusing? Does
                navigating the app feel logical or does it feel arbitrary? Does
                interacting with the app give people the sense that they’re
                efficiently accomplishing the tasks they set out to achieve.
              </Text>
            </View>
          </View>
        }
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contain} bounces={false}>
      {renderFlipCardComponent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: DEVICE_HEIGHT * 0.7,
    padding: 5,
  },
  cardContain: {
    backgroundColor: miColor.white,
    borderRadius: 30,
    height: DEVICE_HEIGHT * 0.7,
    overflow: 'hidden',
    width: DEVICE_WIDTH * 0.8,
  },
  cardContainer: {
    height: DEVICE_WIDTH / 2,
    marginHorizontal: 8,
    marginVertical: 12,
    width: DEVICE_WIDTH / 2 - 20,
  },
  cardNumber: {
    color: miColor.gold,
    fontSize: 22,
  },
  cardStyle: {
    backgroundColor: miColor.black,
    height: DEVICE_HEIGHT * 0.7,
    justifyContent: 'space-around',
    width: DEVICE_WIDTH * 0.7,
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

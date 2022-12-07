/* eslint-disable no-console */
import * as React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Button,
  Card,
  CircularProgressBar,
  ScrollIndicator,
} from '@mindinventory/react-native-neopop';

const ItemWidth = Dimensions.get('screen').width - 20;

const ListComponentScreen = () => {
  const components = [
    { id: 0, name: 'Card' },
    { id: 1, name: 'Progress' },
    { id: 2, name: 'New Pop' },
    { id: 3, name: 'Floating' },
    { id: 4, name: 'scrollIndicator' },
  ];
  const [selected, setSelected] = React.useState(4);

  const arrScrollData = [
    { text: 'cat', value: 'https://i.imgur.com/CzXTtJV.jpg' },
    { text: 'dog', value: 'https://i.imgur.com/OB0y6MR.jpg' },
    {
      text: 'fox',
      value:
        'https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg',
    },
    {
      text: 'cheetah',
      value:
        'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg',
    },
    {
      text: 'bird',
      value:
        'https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg',
    },
    { text: 'bridge', value: 'https://i.imgur.com/OnwEDW3.jpg' },
    {
      text: 'lighthouse',
      value:
        'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg',
    },
    {
      text: 'cheetah',
      value:
        'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg',
    },
    {
      text: 'sailboat',
      value:
        'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg',
    },
    {
      text: 'piano',
      value:
        'https://farm4.staticflickr.com/3224/3081748027_0ee3d59fea_z_d.jpg',
    },
    {
      text: 'apple',
      value:
        'https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg',
    },
    {
      text: 'flower',
      value:
        'https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg',
    },
    {
      text: 'mushroom',
      value:
        'https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg',
    },
    {
      text: 'boat',
      value: 'https://farm1.staticflickr.com/49/157534104_95ca4e0ae6.jpg',
    },
  ];

  const renderCardLayout = () => {
    return (
      <ScrollView
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.flexDirectionRow}>
          {new Array(5).fill('1').map((_, index) => {
            return (
              <Card
                height={220}
                width={310}
                borderWidth={5}
                key={index.toString()}
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
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const remderCircleProgress = () => {
    return (
      <View style={styles.centerItemStyle}>
        <CircularProgressBar
          progress={40}
          shadowColor={'white'}
          gradientColors={['#292626']}
        />
      </View>
    );
  };

  const renderNeoPopButton = () => {
    return (
      <View style={styles.neoButtonLayout}>
        {new Array(8).fill('$').map((_value, index) => {
          return (
            <View
              style={index !== 0 && styles.marginLeftMinus}
              key={index.toString()}
            >
              <Button
                width={80}
                height={80}
                title={`${index + 1}`}
                sideShadowColor={'#363636'}
                bottomShadowColor={'#363636'}
                backgroundColor={'#f96b8f'}
                textStyle={styles.neoBtnTextStyle}
                onPress={() => {
                  console.log('NeoPop onPress');
                }}
                onPressIn={() => {
                  console.log('NeoPop onPressIn');
                }}
                onPressOut={() => {
                  console.log('NeoPop onPressOut');
                }}
                onLongPress={() => {
                  console.log('NeoPop onLongPress');
                }}
              />
            </View>
          );
        })}
      </View>
    );
  };

  const renderFlaotingButton = () => {
    return (
      <View style={styles.centerItemStyle}>
        <Button
          preset="floating"
          width={250}
          height={65}
          title="PRESS ME"
          textStyle={styles.floatingTextStyle}
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
      </View>
    );
  };

  const renderLayout = () => {
    if (selected === 0) {
      return renderCardLayout();
    } else if (selected === 1) {
      return remderCircleProgress();
    } else if (selected === 2) {
      return renderNeoPopButton();
    } else if (selected === 3) {
      return renderFlaotingButton();
    } else {
      return renderScrollIndicator();
    }
  };

  const renderScrollIndicator = () => {
    return (
      <View style={styles.centerItemStyle}>
        <ScrollIndicator
          data={arrScrollData}
          renderItem={(item, _index) => {
            return (
              <View style={styles.rowContainer}>
                {/* <Text style={styles.indexStyle}>{index + 1}</Text> */}
                <Image
                  source={{ uri: item.value }}
                  style={{ height: '100%', width: '100%', borderRadius: 10 }}
                  resizeMode="cover"
                />
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderComponent = () => {
    return (
      <ScrollView>
        <View style={styles.containerStyle}>{renderLayout()}</View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreabackground}>
      <View style={styles.mainContainer}>
        <FlatList
          data={components}
          numColumns={2}
          style={styles.flatListStyle}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelected(item?.id)}
                style={[
                  styles.coponentListStyle,
                  selected === index && styles.selectedItem,
                ]}
              >
                <Text
                  style={
                    selected === index && styles.selectedItem
                      ? styles.selectedText
                      : styles.unSelectedText
                  }
                >
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {renderComponent()}
      </View>
    </SafeAreaView>
  );
};

export default ListComponentScreen;

const styles = StyleSheet.create({
  cardNumber: {
    color: 'gold',
    fontSize: 22,
  },
  cardStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  carNameText: {
    color: 'gold',
    fontSize: 15,
    marginTop: 0,
  },
  centerItemStyle: {
    alignSelf: 'center',
  },
  containerStyle: {},
  coponentListStyle: {
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 0.9,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  dateContainer: {
    marginVertical: 20,
  },
  flatListStyle: {
    alignSelf: 'center',
  },
  flexDirectionRow: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  floatingTextStyle: {
    fontSize: 24,
  },
  indexStyle: { fontSize: 30, fontWeight: '700' },
  mainContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#202020',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  marginLeftMinus: {
    marginLeft: -10,
  },
  neoBtnTextStyle: {
    color: 'white',
  },
  neoButtonLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  rowContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    width: ItemWidth,
  },
  safeAreabackground: {
    backgroundColor: '#202020',
  },
  selectedItem: {
    backgroundColor: '#f96b8f',
    borderWidth: 0,
  },
  selectedText: {
    color: 'white',
    fontWeight: '800',
  },
  timeText: {
    color: 'gold',
    fontSize: 15,
  },
  unSelectedText: {
    color: 'white',
    fontWeight: '500',
  },
  validText: {
    color: 'gold',
    fontSize: 10,
  },
});

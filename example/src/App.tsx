import * as React from 'react';
import {
  FlatList,
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
} from '@mindinventory/react-native-skia-components';

export default function App() {
  const components = [
    { id: 0, name: 'Card' },
    { id: 1, name: 'Progress' },
    { id: 2, name: 'New Pop' },
    { id: 3, name: 'Floating' },
  ];
  const [selected, setSelected] = React.useState(0);

  const renderCardLayout = () => {
    return (
      <ScrollView
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.flexDirectionRow}>
          {new Array(5).fill('1').map(() => {
            return (
              <Card height={220} width={310} borderWidth={5}>
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
          console.log('index >>>', index);

          return (
            <View style={index !== 0 && styles.marginLeftMinus}>
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
    } else {
      return renderFlaotingButton();
    }
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
}
/*

*/
const styles = StyleSheet.create({
  safeAreabackground: {
    backgroundColor: '#202020',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#202020',
  },
  containerStyle: {},
  flatListStyle: { alignSelf: 'center' },
  cardStyle: {
    justifyContent: 'center',
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  cardNumber: { color: 'gold', fontSize: 22 },
  dateContainer: {
    marginVertical: 20,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  neoButtonLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  centerItemStyle: { alignSelf: 'center' },
  marginLeftMinus: { marginLeft: -10 },
  validText: { color: 'gold', fontSize: 10 },
  timeText: { color: 'gold', fontSize: 15 },
  coponentListStyle: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 5,
    borderWidth: 0.9,
    borderColor: 'white',
    borderRadius: 10,
  },
  selectedItem: {
    backgroundColor: '#f96b8f',
    borderWidth: 0,
  },
  neoBtnTextStyle: { color: 'white' },
  selectedText: { color: 'white', fontWeight: '800' },
  unSelectedText: { color: 'white', fontWeight: '500' },
  carNameText: { color: 'gold', fontSize: 15, marginTop: 0 },
  floatingTextStyle: {
    fontSize: 24,
  },
});

/* eslint-disable no-console */
import * as React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import moment from 'moment';

import {
  Button,
  Card,
  CircularProgressBar,
  LineChartComponent,
} from '@mindinventory/react-native-neopop';

import { originalData } from '../Data';
import { lineChartStyles } from '../style';

const ListComponentScreen = () => {
  const components = [
    { id: 0, name: 'Card' },
    { id: 1, name: 'Progress' },
    { id: 2, name: 'New Pop' },
    { id: 3, name: 'Floating' },
    { id: 4, name: 'LineChart' },
  ];
  const [selected, setSelected] = React.useState(0);
  const [data, setData] = React.useState<number[]>([]);

  React.useEffect(() => {
    let dataList = [];

    if (originalData.length === 1) {
      dataList.push(0);
    }
    originalData.map((item) => {
      dataList.push({
        data: item.data,
        value: item.value,
      });
    });

    setData(dataList);
  }, []);

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
      return renderLineChart();
    }
  };

  const renderLineChart = () => {
    return (
      <View style={lineChartStyles.container}>
        <LineChartComponent
          canvasHeight={Dimensions.get('window').height * 0.5}
          canvasWidth={Dimensions.get('window').width * 0.85}
          fontPath={require('../assets/font/Roboto-Bold.ttf')}
          data={data}
          isGradient={true}
          isGridLines={true}
          labelStyle={lineChartStyles.labelStyle}
          axisStyle={lineChartStyles.axisStyle}
          formateXLabel={(value: string) => `${moment(value).format('DDMMM')}`}
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

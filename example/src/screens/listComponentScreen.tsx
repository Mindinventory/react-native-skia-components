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

import { miColor } from '../constant/colors';

const ListComponentScreen = () => {
  const components = [
    { id: 0, name: 'Card' },
    { id: 1, name: 'Progress' },
    { id: 2, name: 'New Pop' },
    { id: 3, name: 'Floating' },
    { id: 4, name: 'Star War' },
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
          shadowColor={miColor.white}
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
                sideShadowColor={miColor.lightGray}
                bottomShadowColor={miColor.lightGray}
                backgroundColor={miColor.lightPink}
                textStyle={styles.neoBtnTextStyle}
                onPress={() => {}}
              />
            </View>
          );
        })}
      </View>
    );
  };

  const renderFloatingButton = () => {
    return (
      <View style={styles.centerItemStyle}>
        <Button
          preset="floating"
          width={150}
          height={50}
          title="PRESS ME"
          textStyle={styles.floatingTextStyle}
          onPress={() => {}}
        />
      </View>
    );
  };

  const renderStarWarButton = () => {
    return (
      <View style={styles.centerItemStyle}>
        <Button
          preset="starWar"
          onPress={() => {}}
          title="Button"
          colors={[miColor.cyan, miColor.magenta, miColor.yellow, miColor.cyan]}
          filled={'outer'}
          gradientType={'linear'}
          buttonBorderRadius={50}
          width={200}
          height={20}
          titleSize={20}
          titleColor={miColor.white}
          animation
          backgroundColor={miColor.white}
        />
        <Button
          preset="starWar"
          onPressIn={() => {}}
          title="Button 2"
          colors={[miColor.cyan, miColor.magenta, miColor.yellow, miColor.cyan]}
          filled={'solid'}
          gradientType={'sweep'}
          titleSize={20}
          blurRadius={10}
          titleColor={miColor.white}
          width={200}
          height={20}
          animation={true}
        />
        <Button
          preset="starWar"
          onPressIn={() => {}}
          title="Button 2"
          colors={[miColor.cyan, miColor.magenta, miColor.yellow, miColor.cyan]}
          filled={'inner'}
          gradientType={'radial'}
          titleSize={20}
          blurRadius={10}
          titleColor={miColor.white}
          width={200}
          height={20}
          animation={false}
        />
        <Button
          preset="starWar"
          onLongPress={() => {}}
          title="Button 3"
          colors={miColor.darkYellowShade}
          filled={'normal'}
          gradientType={'linear'}
          titleSize={20}
          blurRadius={5}
          titleColor={miColor.white}
          width={200}
          height={20}
          animation={true}
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
      return renderFloatingButton();
    } else {
      return renderStarWarButton();
    }
  };

  const renderComponent = () => {
    return (
      <ScrollView>
        <View>{renderLayout()}</View>
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
    color: miColor.gold,
    fontSize: 22,
  },
  cardStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  carNameText: {
    color: miColor.gold,
    fontSize: 15,
    marginTop: 0,
  },
  centerItemStyle: {
    alignSelf: 'center',
  },
  coponentListStyle: {
    borderColor: miColor.white,
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
    backgroundColor: miColor.darkBlack,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  marginLeftMinus: {
    marginLeft: -10,
  },
  neoBtnTextStyle: {
    color: miColor.white,
  },
  neoButtonLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  safeAreabackground: {
    backgroundColor: miColor.darkBlack,
  },
  selectedItem: {
    backgroundColor: miColor.lightPink,
    borderWidth: 0,
  },
  selectedText: {
    color: miColor.white,
    fontWeight: '800',
  },
  timeText: {
    color: miColor.gold,
    fontSize: 15,
  },
  unSelectedText: {
    color: miColor.white,
    fontWeight: '500',
  },
  validText: {
    color: miColor.gold,
    fontSize: 10,
  },
});

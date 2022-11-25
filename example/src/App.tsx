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
  CircularProgressBar,
  DebitCard,
  FloatingButton,
  NeoButton,
} from './components';

const components = [
  { id: 0, name: 'Card' },
  { id: 1, name: 'Progress' },
  { id: 2, name: 'New Pop' },
  { id: 3, name: 'Floating' },
];

export default function App() {
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
            return <DebitCard />;
          })}
        </View>
      </ScrollView>
    );
  };

  const renderCircleProgress = () => {
    return (
      <View style={styles.centerItemStyle}>
        <CircularProgressBar progress={35} />
      </View>
    );
  };

  const renderNeoPopButton = () => {
    return (
      <View style={styles.neoButtonLayout}>
        {new Array(8).fill('$').map((_, index) => {
          console.log('index >>>', index);

          return (
            <View style={index !== 0 && styles.marginLeftMinus}>
              <NeoButton index={index} />
            </View>
          );
        })}
      </View>
    );
  };

  const renderFlaotingButton = () => {
    return (
      <View style={styles.centerItemStyle}>
        <FloatingButton />
      </View>
    );
  };

  const renderSkiaLayout = () => {
    switch (selected) {
      case 0:
        return renderCardLayout();
      case 1:
        return renderCircleProgress();
      case 2:
        return renderNeoPopButton();
      case 3:
        return renderFlaotingButton();
      default:
        return <></>;
    }
  };

  const renderSkiaComponents = () => {
    return <ScrollView>{renderSkiaLayout()}</ScrollView>;
  };
  return (
    <SafeAreaView style={styles.safeAreabackground}>
      <View style={styles.mainContainer}>
        <FlatList
          data={components}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
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
        {renderSkiaComponents()}
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
  flexDirectionRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  neoButtonLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  validText: { color: 'gold', fontSize: 10 },
  timeText: { color: 'gold', fontSize: 15 },
  centerItemStyle: { alignSelf: 'center' },
  marginLeftMinus: { marginLeft: -10 },
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
  selectedText: { color: 'white', fontWeight: '800' },
  unSelectedText: { color: 'white', fontWeight: '500' },
});

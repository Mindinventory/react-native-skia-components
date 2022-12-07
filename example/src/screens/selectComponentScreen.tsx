import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { StackNavigationParamList } from '../navigation/navigation';

type StackNavigation = NativeStackNavigationProp<
  StackNavigationParamList,
  'SelectComponentScreen'
>;

const SelectComponentScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  const arrComponents = [
    {
      id: 1,
      name: 'CARD EXAMPLE SCREEN',
      navigation: () => {
        navigation.navigate('CardScreen');
      },
    },
    {
      id: 2,
      name: 'CARD COMPONENT',
      navigation: () => {
        navigation.navigate('CardComponent');
      },
    },
    {
      id: 3,
      name: 'NEO-POP BUTTON',
      navigation: () => {
        navigation.navigate('NeoPopButton');
      },
    },
    {
      id: 4,
      name: 'STAR WARS BUTTON',
      navigation: () => {
        navigation.navigate('StarWarsButtonScreen');
      },
    },
    {
      id: 5,
      name: 'FLOATING BUTTON',
      navigation: () => {
        navigation.navigate('FloatingButton');
      },
    },
    {
      id: 5,
      name: 'FANCY SCROLL INDICATOR',
      navigation: () => {
        navigation.navigate('FancyScrollIndicator');
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.selectAnimContainer}>
          <Text style={styles.selectAnimText}>SELECT COMPONENT TYPE</Text>
        </View>
        {arrComponents.map((item, index) => {
          return (
            <TouchableOpacity
              key={index + item.id.toString()}
              style={styles.animOptionStyle}
              onPress={() => item.navigation()}
            >
              <Text style={styles.animOptionText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SelectComponentScreen);

const styles = StyleSheet.create({
  animOptionNoneStyle: {
    marginBottom: '1%',
    marginStart: 16,
    marginTop: '4%',
  },
  animOptionStyle: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginStart: 16,
    marginTop: '4%',
  },
  animOptionText: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
  },
  animOtherOptionText: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingTop: 20,
    width: '95%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  selectAnimContainer: {
    borderBottomWidth: 1.5,
  },
  selectAnimText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
});
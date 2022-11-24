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

import type { StackNavigationParamList } from '../navigations/stackNavigation';

type StackNavigation = NativeStackNavigationProp<
  StackNavigationParamList,
  'SelectComponentScreen'
>;

const SelectComponentScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.selectAnimContainer}>
          <Text style={styles.selectAnimText}>SELECT COMPONENT TYPE</Text>
        </View>
        <TouchableOpacity
          style={styles.animOptionStyle}
          onPress={() => navigation.navigate('CardComponent')}
        >
          <Text style={styles.animOptionText}>CARD COMPONENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.animOptionStyle}
          onPress={() => {
            navigation.navigate('NeoPopButton');
          }}
        >
          <Text style={styles.animOtherOptionText}>NEO-POP BUTTON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.animOptionNoneStyle}
          onPress={() => {
            navigation.navigate('StarWarsButtonScreen');
          }}
        >
          <Text style={styles.animOtherOptionText}>STAR WAR BUTTON</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectComponentScreen;

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
    fontSize: 24,
    fontWeight: 'bold',
    marginStart: 16,
    paddingBottom: 10,
    textAlign: 'center',
  },
});

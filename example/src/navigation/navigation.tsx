import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardComponent from '../screens/cards/cardComponent';
import CardScreen from '../screens/cards/cardScreen';
import NeoPopButtonExample from '../screens/neoPopButton';
import SelectComponentScreen from '../screens/selectComponentScreen';
import StarWarsButtonScreen from '../screens/starWarsButtonScreen';

export type StackNavigationParamList = {
  SelectComponentScreen: undefined;
  CardComponent: undefined;
  NeoPopButton: undefined;
  StarWarsButtonScreen: undefined;
  CardScreen: undefined;
};

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'SelectComponentScreen'}
          component={SelectComponentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'CardComponent'} component={CardComponent} />
        <Stack.Screen name={'CardScreen'} component={CardScreen} />
        <Stack.Screen name={'NeoPopButton'} component={NeoPopButtonExample} />
        <Stack.Screen
          name={'StarWarsButtonScreen'}
          component={StarWarsButtonScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

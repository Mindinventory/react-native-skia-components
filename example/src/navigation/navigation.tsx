import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FloatingButton } from '../components';
import { miColor } from '../constant/colors';
import CardComponent from '../screens/cards/cardComponent';
import CardScreen from '../screens/cards/cardScreen';
import FlipViewExample from '../screens/flipViewExample';
import NeoPopButtonExample from '../screens/neoPopButton';
import SelectComponentScreen from '../screens/selectComponentScreen';
import StarWarsButtonScreen from '../screens/starWarsButtonScreen';
import SwipableExampleScreen from '../screens/swipableExampleScreen';

export type StackNavigationParamList = {
  SelectComponentScreen: undefined;
  CardComponent: undefined;
  NeoPopButton: undefined;
  StarWarsButtonScreen: undefined;
  CardScreen: undefined;
  FloatingButton: undefined;
  FlipViewExample: undefined;
  SwipableExampleScreen: undefined;
};

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: miColor.black,
          },
          headerTintColor: miColor.white,
        }}
      >
        <Stack.Screen
          name={'SelectComponentScreen'}
          component={SelectComponentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'CardComponent'} component={CardComponent} />
        <Stack.Screen
          name={'CardScreen'}
          component={CardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'NeoPopButton'} component={NeoPopButtonExample} />
        <Stack.Screen
          name={'StarWarsButtonScreen'}
          component={StarWarsButtonScreen}
        />
        <Stack.Screen name={'FloatingButton'} component={FloatingButton} />
        <Stack.Screen name={'FlipViewExample'} component={FlipViewExample} />
        <Stack.Screen
          name={'SwipableExampleScreen'}
          component={SwipableExampleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

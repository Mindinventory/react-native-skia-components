import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FloatingButton } from '../components';
import CardComponent from '../screens/cards/cardComponent';
import CardScreen from '../screens/cards/cardScreen';
import FancyScrollIndicatorScreen from '../screens/fancyScrollIndicatorScreen';
import NeoPopButtonExample from '../screens/neoPopButton';
import SelectComponentScreen from '../screens/selectComponentScreen';
import StarWarsButtonScreen from '../screens/starWarsButtonScreen';

export type StackNavigationParamList = {
  SelectComponentScreen: undefined;
  CardComponent: undefined;
  NeoPopButton: undefined;
  StarWarsButtonScreen: undefined;
  CardScreen: undefined;
  FloatingButton: undefined;
  FancyScrollIndicator: undefined;
};

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
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
        <Stack.Screen
          name={'FancyScrollIndicator'}
          component={FancyScrollIndicatorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

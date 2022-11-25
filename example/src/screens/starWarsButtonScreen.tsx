/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';

import { Button } from '@mindinventory/react-native-neopop';

import { styles } from './componentStyle.style';

const StarWarsButtonScreen = () => {
  return (
    <View style={styles.centerItemStyle}>
      <Button
        preset="starWar"
        onPress={() => console.log('Hello')}
        title="Button"
        colors={['cyan', 'magenta', 'yellow', 'cyan']}
        filled={'inner'}
        gradientType={'linear'}
        buttonBorderRadius={50}
        width={200}
        height={20}
        titleSize={20}
        titleColor={'white'}
        animation={true}
        backgroundColor={'green'}
      />
      <Button
        preset="starWar"
        onPressIn={() => console.log('Hello 2')}
        title="Button 2"
        colors={['cyan', 'magenta', 'yellow', 'cyan']}
        filled={'solid'}
        gradientType={'sweep'}
        titleSize={20}
        blurRadius={10}
        titleColor={'white'}
        width={200}
        height={20}
        animation={true}
        backgroundColor={'darkred'}
      />
      <Button
        preset="starWar"
        onPressOut={() => console.log('Hello 2')}
        title="Button 2"
        colors={['cyan', 'magenta', 'black', 'cyan']}
        filled={'inner'}
        gradientType={'radial'}
        titleSize={20}
        blurRadius={10}
        titleColor={'white'}
        width={200}
        height={20}
        animation={false}
        backgroundColor={'#d29cf8'}
      />
      <Button
        preset="starWar"
        onLongPress={() => console.log('Hello 3')}
        title="Button 3"
        colors={'darkblue'}
        filled={'normal'}
        gradientType={'linear'}
        titleSize={20}
        blurRadius={5}
        titleColor={'white'}
        width={200}
        height={20}
        animation={true}
        backgroundColor={'rgba(250, 226, 46,1)'}
      />
    </View>
  );
};

export default StarWarsButtonScreen;

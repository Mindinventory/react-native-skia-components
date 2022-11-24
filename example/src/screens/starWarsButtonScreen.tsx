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
        filled={'outer'}
        gradientType={'linear'}
        buttonBorderRadius={50}
        width={200}
        height={20}
        titleSize={20}
        titleColor={'white'}
        animation={true}
        backgroundColor={'white'}
      />
      <Button
        preset="starWar"
        onPressIn={() => console.log('Hello 2')}
        title="Button 2"
        colors={['cyan', 'magenta', 'yellow', 'cyan']}
        filled={'outer'}
        gradientType={'sweep'}
        titleSize={20}
        blurRadius={10}
        titleColor={'white'}
        width={200}
        height={20}
        animation={true}
      />
      <Button
        preset="starWar"
        onPressIn={() => console.log('Hello 2')}
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
      />
    </View>
  );
};

export default StarWarsButtonScreen;

import React from 'react';
import { View } from 'react-native';

import { StarWarButton } from '@mindinventory/react-native-skia-components';

import { styles } from './componentStyle.style';

const StarWarsButtonScreen = () => {
  return (
    <View style={styles.centerItemStyle}>
      <StarWarButton
        onPress={() => {}}
        title="Button"
        colors={['cyan', 'magenta', 'yellow', 'cyan']}
        filled={'solid'}
        gradientType={'linear'}
        buttonBorderRadius={50}
        width={250}
        height={20}
        titleSize={20}
        titleColor={'white'}
        animation={true}
        start={{ x: 100, y: 0 }}
        end={{ x: 0, y: 10 }}
      />
      <StarWarButton
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
        backgroundColor={'gray'}
      />
      <StarWarButton
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
      <StarWarButton
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
        backgroundColor={'transparent'}
      />
    </View>
  );
};

export default StarWarsButtonScreen;

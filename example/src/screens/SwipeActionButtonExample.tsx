import React, { useState } from 'react';
import { View } from 'react-native';

import { SwipeActionButton } from '@mindinventory/react-native-skia-components';

import { styles } from './componentStyle.style';

const SwipeActionButtonExample = () => {
  const [error, setError] = useState<boolean>(false);

  return (
    <View style={styles.centerItemStyle}>
      <SwipeActionButton
        progressColor={'red'}
        circleBackgroundColor={'blue'}
        height={60}
        title={'Swipe to pay'}
        onComplete={() => {
          setTimeout(() => {
            setError(true);
          }, 5000);
        }}
        onError={error}
        setOnError={(error) => {
          setError(error);
        }}
      />
    </View>
  );
};

export default SwipeActionButtonExample;

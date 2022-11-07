import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { multiply } from '@mindinventory/react-native-skia-component';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 60,
    marginVertical: 20,
    width: 60,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

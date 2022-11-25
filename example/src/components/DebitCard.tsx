import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@mindinventory/react-native-skia-components';

const DebitCard: React.FC = () => {
  return (
    <Card height={220} width={310} borderWidth={5}>
      <View style={[styles.cardStyle]}>
        <Text style={styles.cardNumber}>
          5499 &nbsp; 5008 &nbsp; 9101 &nbsp; 1123
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.validText}>Valid Till</Text>
          <Text style={styles.timeText}>12/25</Text>
        </View>
        <Text style={styles.cardNameText}>Mindinventory</Text>
      </View>
    </Card>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  cardNameText: { color: 'gold', fontSize: 15, marginTop: 0 },
  cardNumber: { color: 'gold', fontSize: 22 },
  cardStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dateContainer: {
    marginVertical: 20,
  },
  timeText: { color: 'gold', fontSize: 15 },
  validText: { color: 'gold', fontSize: 10 },
});

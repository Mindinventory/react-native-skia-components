import { View, Text } from 'react-native';
import React from 'react';
import { Card } from '@mindinventory/react-native-skia-components';
import { StyleSheet } from 'react-native';

const DebitCard: React.FC = () => {
  console.log('DebitCard');

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
  cardStyle: {
    justifyContent: 'center',
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  cardNumber: { color: 'gold', fontSize: 22 },
  dateContainer: {
    marginVertical: 20,
  },
  cardNameText: { color: 'gold', fontSize: 15, marginTop: 0 },
  validText: { color: 'gold', fontSize: 10 },
  timeText: { color: 'gold', fontSize: 15 },
});

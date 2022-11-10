import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import {
  Button,
  Card,
  CircularProgressBar,
  Direction,
} from '@mindinventory/react-native-neopop';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Card height={220} width={310} borderWidth={5}>
              <View style={styles.cardStyle}>
                <Text style={styles.cardNumber}>
                  5499 &nbsp; 5008 &nbsp; 9101 &nbsp; 1123
                </Text>
                <View style={styles.dateContainer}>
                  <Text style={styles.validText}>Valid Till</Text>
                  <Text style={styles.timeText}>12/25</Text>
                </View>
                <Text style={styles.carNameText}>Mindinventory</Text>
              </View>
            </Card>
            <CircularProgressBar progress={70} />
            <Button preset="neoPop" buttonDirection={Direction.Right} />
            <Button preset="floating" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  cardNumber: { color: 'gold', fontSize: 22 },
  dateContainer: {
    marginVertical: 20,
  },
  validText: { color: 'gold', fontSize: 10 },
  timeText: { color: 'gold', fontSize: 15 },
  carNameText: { color: 'gold', fontSize: 15, marginTop: 0 },
});

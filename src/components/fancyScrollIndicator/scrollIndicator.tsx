import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Canvas,
  Group,
  Path,
  RoundedRect,
  Skia,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';

const indicatorBgWidth = 140;
const indicatorWidth = 30;
var bgWidth = 0;

const ScrollIndicator = () => {
  const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const path = Skia.Path.Make();
  path.moveTo(8, 0);
  path.lineTo(11, 5);
  path.lineTo(15, 6);
  path.lineTo(12, 9);
  path.lineTo(13, 15);
  path.lineTo(8, 13);
  path.lineTo(3, 15);
  path.lineTo(5, 9);
  path.lineTo(0, 6);
  path.lineTo(6, 5);
  path.lineTo(8, 0);
  path.close();

  const animationValue = useValue(0);

  const translateX = useComputedValue(() => {
    return [
      {
        translateX: animationValue.current,
      },
    ];
  }, [animationValue]);

  return (
    <SafeAreaView>
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={({ nativeEvent }) => {
            bgWidth =
              (nativeEvent?.contentSize?.width || 0) -
              (nativeEvent?.layoutMeasurement?.width || 0);

            animationValue.current =
              nativeEvent.contentOffset.x * (indicatorBgWidth / bgWidth);
          }}
        >
          {data.map((item) => {
            return (
              <View style={styles.rowContainer}>
                <Text>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <Canvas
            style={styles.canvasStyle}
            children={
              <>
                <RoundedRect
                  x={0}
                  y={0}
                  width={indicatorBgWidth + indicatorWidth - 10}
                  height={20}
                  r={10}
                  color="lightblue"
                  style={'stroke'}
                  strokeWidth={2}
                />
                <Group transform={translateX}>
                  <Path path={path} color="lightblue" />
                </Group>
              </>
            }
            accessibilityLabelledBy={undefined}
            accessibilityLanguage={undefined}
          />
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvasStyle: { height: 200, width: indicatorBgWidth + indicatorWidth },
  rowContainer: {
    backgroundColor: 'red',
    height: 100,
    margin: 10,
    width: 300,
  },
});

export default ScrollIndicator;

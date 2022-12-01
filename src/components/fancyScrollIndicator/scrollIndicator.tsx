import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Canvas,
  Group,
  Path,
  RoundedRect,
  Skia,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';

const indicatorWidth = 30;
var bgWidth = 0;
const ItemWidth = Dimensions.get('screen').width - 20;
const indicatorContainerWidth = ItemWidth / 1.5;
const INDICATOR_SPEED = 0.02;

const ScrollIndicator = () => {
  const starPath = Skia.Path.Make();
  starPath.moveTo(8, 0);
  starPath.lineTo(10, 5);
  starPath.lineTo(16, 5);
  starPath.lineTo(12, 9);
  starPath.lineTo(14, 15);
  starPath.lineTo(8, 12);
  starPath.lineTo(3, 15);
  starPath.lineTo(5, 9);
  starPath.lineTo(0, 6);
  starPath.lineTo(6, 5);
  starPath.lineTo(8, 0);
  starPath.close();

  const animationValue = useValue(0);
  const rotateValue = useValue(0);
  const data = new Array(6).fill('_');

  const arcPath = Skia.Path.Make();
  arcPath.moveTo(0, 20);
  // arcPath.addArc({ height: 30, width: 25, x: 15, y: 0 }, 125, 125);
  arcPath.addOval({
    height: 15,
    width: (indicatorContainerWidth + indicatorWidth) / 2,
    x: 0,
    y: 0,
  });
  arcPath.close();

  const translateX = useComputedValue(() => {
    return [
      {
        translateX: animationValue.current,
      },
    ];
  }, [animationValue]);

  const rotationValue = useComputedValue(() => {
    return [
      {
        rotate: rotateValue.current,
      },
    ];
  }, [rotateValue]);

  return (
    <SafeAreaView>
      <>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => {
            bgWidth =
              (nativeEvent?.contentSize?.width || 0) -
              (nativeEvent?.layoutMeasurement?.width || 0);

            const calculated =
              nativeEvent.contentOffset.x * (indicatorContainerWidth / bgWidth);
            if (animationValue.current > calculated) {
              rotateValue.current -= INDICATOR_SPEED;
              if (rotateValue.current < 0) {
                rotateValue.current = 0;
              }
            } else {
              rotateValue.current += INDICATOR_SPEED;
            }

            rotateValue.current;
            animationValue.current = calculated;
          }}
          renderItem={({ index }) => {
            return (
              <View style={styles.rowContainer}>
                <Text style={styles.indexStyle}>{index + 1}</Text>
              </View>
            );
          }}
        />
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => {
            bgWidth =
              (nativeEvent?.contentSize?.width || 0) -
              (nativeEvent?.layoutMeasurement?.width || 0);

            const calculated =
              nativeEvent.contentOffset.x * (indicatorContainerWidth / bgWidth);
            animationValue.current = calculated;
            // if (calculated > indicatorContainerWidth) {
            //   animationValue.current = indicatorContainerWidth + 10;
            // }
          }}
        >
          {data.map((item) => {
            return (
              <View style={styles.rowContainer}>
                <Text style={styles.indexStyle}>{item}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <View style={styles.indicatorContainer}>
          <Canvas
            style={styles.canvasStyle}
            children={
              <>
                <RoundedRect
                  x={0}
                  y={0}
                  width={indicatorContainerWidth + indicatorWidth - 5}
                  height={20}
                  r={20}
                  color="lightblue"
                  style={'stroke'}
                  strokeWidth={1.5}
                />
                <Group transform={translateX}>
                  <Path
                    path={starPath}
                    color="red"
                    origin={{
                      x: 8,
                      y: 8.5,
                    }}
                    style={'fill'}
                    transform={rotationValue}
                  />
                </Group>
                {/* {new Array(data.length / 2).fill('').map((_item, index) => {
                  const xPos = 20 * index + 1;
                  return (
                    <>
                      <RoundedRect
                        x={xPos * 2.2}
                        y={0}
                        width={(indicatorContainerWidth + indicatorWidth) / 2}
                        height={20}
                        r={20}
                        origin={{
                          x: 10,
                          y: 0,
                        }}
                        color={index === 0 ? 'white' : 'red'}
                        style={'stroke'}
                        strokeWidth={1.5}
                      />
                      {index === data.length / 2 - 1 && (
                        <Group transform={translateX}>
                          <Path
                            path={starPath}
                            color="red"
                            origin={{
                              x: 8,
                              y: 8.5,
                            }}
                            style={'fill'}
                            transform={rotationValue}
                          />
                        </Group>
                      )}
                    </>
                  );
                })} */}
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
  canvasStyle: {
    height: 20,
    marginHorizontal: 40,
    width: indicatorContainerWidth + indicatorWidth,
  },
  indexStyle: { fontSize: 30, fontWeight: '700' },
  indicatorContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    width: indicatorContainerWidth + indicatorWidth,
  },
  rowContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: ItemWidth,
  },
});

export default ScrollIndicator;

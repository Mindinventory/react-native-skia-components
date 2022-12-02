import React, { useRef } from 'react';
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

var bgWidth = 0;
const ItemWidth = Dimensions.get('screen').width - 20;
const indicatorContainerWidth = ItemWidth / 1.5;
const INDICATOR_SPEED = 0.025;
const xPosition = 25;
type IndictorType = 'star' | 'square';

interface IScrollIndicatorProps {
  indicatorType?: IndictorType;
}

const ScrollIndicator = ({ indicatorType = 'star' }: IScrollIndicatorProps) => {
  const starPath = Skia.Path.Make();
  starPath.moveTo(8, 0);
  starPath.lineTo(11, 5);
  starPath.lineTo(16, 5);
  starPath.lineTo(13, 9);
  starPath.lineTo(14, 15);
  starPath.lineTo(9, 12);
  starPath.lineTo(3, 15);
  starPath.lineTo(5, 9);
  starPath.lineTo(0, 6);
  starPath.lineTo(6, 5);
  starPath.lineTo(8, 0);
  starPath.close();

  const animationValue = useValue(0);
  const rotateValue = useValue(0);
  const data = new Array(6).fill('_');

  let flatListref = useRef<FlatList>(null);

  const translateX = useComputedValue(() => {
    return [
      {
        translateX: animationValue.current,
      },
    ];
  }, [animationValue]);

  // const starTranslateX = useComputedValue(() => {
  //   return [
  //     {
  //       translateX: indicatorContainerWidth / 2 - 8,
  //     },
  //   ];
  // }, [animationValue]);

  const rotationValue = useComputedValue(() => {
    return [
      {
        rotate: rotateValue.current,
      },
    ];
  }, [rotateValue]);

  const getSliderSubView = () => {
    let iMultiply = 0;

    // return new Array(Math.round(data.length / 2))
    return new Array(3).fill('').map((_item, index) => {
      // let halfOfSlider = indicatorContainerWidth - xPos * 2 - 5 * (index + 1);
      iMultiply += 2;
      const nextIndex = index + 1;
      return (
        <Group key={index}>
          <RoundedRect
            x={xPosition * nextIndex}
            y={0}
            width={indicatorContainerWidth - 25 * iMultiply + 1}
            height={20}
            r={20}
            origin={{
              x: 10,
              y: 8,
            }}
            color={'white'}
            style={'stroke'}
            strokeWidth={1.5}
            transform={translateX}
          />
        </Group>
      );
    });
  };

  const getscrollIndicatorComponent = () => {
    switch (indicatorType) {
      case 'star':
        return (
          <Path
            path={starPath}
            color="gold"
            origin={{
              x: 8,
              y: 9,
            }}
            style={'fill'}
            transform={rotationValue}
          />
        );

      case 'square':
        return (
          <RoundedRect
            x={4}
            y={4}
            height={10}
            width={10}
            style={'fill'}
            color={'gold'}
            origin={{
              x: 8,
              y: 9,
            }}
            transform={rotationValue}
          />
        );

      default:
        return (
          <Path
            path={starPath}
            color="gold"
            origin={{
              x: 8,
              y: 9,
            }}
            style={'fill'}
            transform={rotationValue}
          />
        );
    }
  };

  return (
    <SafeAreaView>
      <>
        <FlatList
          ref={flatListref}
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
        <View style={styles.indicatorContainer}>
          <Canvas
            style={[styles.canvasStyle]}
            children={
              <>
                <RoundedRect
                  x={0}
                  y={0}
                  width={indicatorContainerWidth - 1}
                  height={20}
                  r={20}
                  color="white"
                  style={'stroke'}
                  strokeWidth={1.5}
                />
                <Group transform={translateX}>
                  {getscrollIndicatorComponent()}
                  {/* <Path
                    path={starPath}
                    color="gold"
                    origin={{
                      x: 8,
                      y: 9,
                    }}
                    style={'fill'}
                    transform={translateX}
                  /> */}
                </Group>
                {getSliderSubView()}
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
    width: indicatorContainerWidth,
  },
  indexStyle: { fontSize: 30, fontWeight: '700' },
  indicatorContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    width: indicatorContainerWidth,
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

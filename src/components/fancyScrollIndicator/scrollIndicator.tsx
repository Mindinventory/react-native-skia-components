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

const ScrollIndicator = ({
  indicatorType = 'square',
}: IScrollIndicatorProps) => {
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
  let firstRoundedViewIndex = 0;
  let lastRoundedViewIndex = 0;

  let flatListref = useRef<FlatList>(null);

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

  const getSliderSubView = () => {
    let iMultiply = 0;
    // return new Array(Math.round(data.length / 2))
    return new Array(3).fill('').map((_item, index) => {
      iMultiply += 2;
      const nextIndex = index + 1;
      if (index === 0) {
        firstRoundedViewIndex = indicatorContainerWidth - 25 * iMultiply + 1;
      } else if (index === 2) {
        lastRoundedViewIndex = indicatorContainerWidth - 25 * iMultiply + 1;
      } else {
      }

      return (
        <>
          <Group key={index} style="fill" color={'red'} transform={translateX}>
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
              strokeWidth={0.9}
            />
            {getscrollIndicatorComponent()}
          </Group>
        </>
      );
    });
  };

  /*
  <Group
    color="lightblue"
    layer={
      <Paint>
        <Blur blur={10} />
        <ColorMatrix
          matrix={[
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18,
            -7,
          ]}
        />
      </Paint>
    }>
    <Circle cx={30} cy={10} r={20} color={'red'}/>
    <Circle cx={70} cy={10} r={20} color={'gold'}/>
  </Group>
  */
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
          // <Group
          //   transform={rotationValue}
          //   origin={{
          //     x: 0,
          //     y: 0,
          //   }}
          // >
          //   <Rect x={10} y={2} width={14} height={14} color="gold" />
          //   <Rect
          //     x={10}
          //     y={-15}
          //     width={14.5}
          //     height={14.5}
          //     color="gold"
          //     transform={[
          //       {
          //         rotate: Math.PI / 3.5,
          //       },
          //     ]}
          //   />
          // </Group>
          // <Group style={'stroke'} color="gold" transform={translateX}>
          //   <Line
          //     p1={vec(5, 5)}
          //     p2={vec(20, 5)}
          //     color="gold"
          //     style="stroke"
          //     strokeWidth={5}
          //   />
          //   <Line
          //     p1={vec(20, 5)}
          //     p2={vec(5, 15)}
          //     color="gold"
          //     style="stroke"
          //     strokeWidth={5}
          //   />
          //   <Line
          //     p1={vec(5, 15)}
          //     p2={vec(15, -5)}
          //     color="gold"
          //     style="stroke"
          //     strokeWidth={5}
          //   />
          //   <Line
          //     p1={vec(15, -5)}
          //     p2={vec(15, 15)}
          //     color="gold"
          //     style="stroke"
          //     strokeWidth={5}
          //   />
          //   <Line
          //     p1={vec(15, 15)}
          //     p2={vec(5, 5)}
          //     color="gold"
          //     style="stroke"
          //     strokeWidth={5}
          //   />
          // </Group>
        );

      case 'square':
        return (
          <RoundedRect
            x={120}
            y={4}
            height={10}
            width={10}
            style={'fill'}
            color={'gold'}
            origin={{
              x: 125,
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

            console.log('calculated >>>> : ', calculated);
            console.log(
              'firstRoundedViewIndex >>>',
              firstRoundedViewIndex,
              'lastRoundedViewIndex >>>> : ',
              lastRoundedViewIndex
            );

            if (animationValue.current > calculated) {
              rotateValue.current -= INDICATOR_SPEED;
              if (rotateValue.current < 0) {
                rotateValue.current = 0;
              }
            } else {
              rotateValue.current += INDICATOR_SPEED;
            }

            rotateValue.current;
            animationValue.current = Math.abs(calculated);
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
                <Group transform={translateX}>{getSliderSubView()}</Group>
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
    height: 120,
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

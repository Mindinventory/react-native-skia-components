import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Canvas,
  Group,
  RoundedRect,
  Skia,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';

var bgWidth = 0;
const ItemWidth = Dimensions.get('screen').width - 20;
const indicatorContainerWidth = ItemWidth / 1.5;
const INDICATOR_SPEED = 0.025;
const xPosition = 0;
const IndicatorHeight = 20;
const IndicatorRadius = IndicatorHeight * 2;
var scrollInWidth = 0;

interface IScrollIndicatorProps {
  indicatorItemColor?: string;
  indicatorBorderColor?: string;
  innerViewLineColor?: string;
  renderItem: (data: any, index: number) => JSX.Element;
  data: Array<any>;
}

const ScrollIndicator = ({
  indicatorItemColor = 'gold',
  indicatorBorderColor = 'white',
  innerViewLineColor = 'white',
  renderItem,
  data,
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
  var scrollmin = 1;

  if (data.length === 0) {
    throw 'Please add array values to render scroll indicator';
  }

  const translateX = () => {
    return useComputedValue(() => {
      return [
        {
          translateX: animationValue.current,
        },
      ];
    }, [animationValue]);
  };

  const translate = (indexes: number) => {
    return useComputedValue(() => {
      return [
        {
          translateX: animationValue.current * indexes,
        },
      ];
    }, [animationValue]);
  };

  const rotationValue = useComputedValue(() => {
    return [
      {
        rotate: rotateValue.current,
      },
    ];
  }, [rotateValue]);

  const getSliderSubView = () => {
    return new Array(3).fill('').map((_item, index) => {
      const nextIndex = index + 1;
      const indexes = index + 1;

      if (index === 0) {
        scrollInWidth = indicatorContainerWidth * 0.2 * 3;
      } else if (index === 1) {
        scrollInWidth = indicatorContainerWidth * 0.2 * 2;
      } else if (index === 2) {
        scrollInWidth = indicatorContainerWidth * 0.2 * 1;
        scrollmin = scrollInWidth;
      }

      return (
        <Group
          key={index.toString()}
          style="fill"
          transform={translate(indexes)}
        >
          <RoundedRect
            x={xPosition * nextIndex}
            y={0}
            width={scrollInWidth}
            height={IndicatorHeight}
            r={IndicatorRadius}
            origin={{
              x: 10,
              y: 8,
            }}
            color={innerViewLineColor}
            style={'stroke'}
            strokeWidth={0.9}
          />
          {index === 2 && getscrollIndicatorComponent(scrollInWidth)}
        </Group>
      );
    });
  };

  const getscrollIndicatorComponent = (_lastViewWidth: number) => {
    return (
      <RoundedRect
        x={scrollmin / 2.5} //12
        y={IndicatorHeight / 3.5} //4
        height={IndicatorHeight / 2}
        width={IndicatorHeight / 2}
        style={'fill'}
        color={indicatorItemColor}
        origin={{
          x: scrollmin / 2.5 + 4, //16
          y: IndicatorHeight / 2, //9
        }}
        transform={rotationValue}
      />
    );
    // switch (indicatorType) {
    //   case 'star':
    //     return (
    //       <Group transform={[{ translateX: scrollmin / 2.5 }]}>
    //         <Path
    //           path={starPath}
    //           color="gold"
    //           origin={{
    //             x: 8,
    //             y: 10,
    //           }}
    //           style={'stroke'}
    //           transform={rotationValue}
    //         />
    //       </Group>
    //     );

    //   case 'oval':
    //     return (
    //       <Group transform={[{ translateX: scrollmin / 2.5 }]}>
    //         <Oval rect={rect(-5, 6, 15, 4)} />
    //         <Oval rect={rect(0, 0, 4, 15)} />
    //       </Group>
    //     );

    //   case 'square':
    //     return (
    //       <RoundedRect
    //         x={scrollmin / 2.5} //12
    //         y={IndicatorHeight / 3.5} //4
    //         height={IndicatorHeight / 2}
    //         width={IndicatorHeight / 2}
    //         style={'fill'}
    //         color={'gold'}
    //         origin={{
    //           x: scrollmin / 2.5 + 4, //16
    //           y: IndicatorHeight / 2, //9
    //         }}
    //         transform={rotationValue}
    //       />
    //     );

    //   default:
    //     return (
    //       <Path
    //         path={starPath}
    //         color="gold"
    //         origin={{
    //           x: 8,
    //           y: 9,
    //         }}
    //         style={'fill'}
    //         transform={rotationValue}
    //       />
    //     );
    // }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        onScroll={(e) => {
          const { nativeEvent } = e;
          bgWidth = nativeEvent?.contentSize?.width || 0;

          const indic =
            indicatorContainerWidth - indicatorContainerWidth / data.length;

          const differnece = indic / scrollmin;

          const calculated =
            (nativeEvent.contentOffset.x *
              (indicatorContainerWidth / bgWidth)) /
            differnece;

          if (animationValue.current > calculated) {
            rotateValue.current -= INDICATOR_SPEED;
            if (rotateValue.current < 0) {
              rotateValue.current = 0;
            }
          } else {
            rotateValue.current += INDICATOR_SPEED;
          }

          animationValue.current = calculated;
        }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
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
                height={IndicatorHeight}
                r={IndicatorRadius}
                color={indicatorBorderColor}
                style={'stroke'}
                strokeWidth={1.5}
              />
              <Group transform={translateX()}>{getSliderSubView()}</Group>
            </>
          }
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvasStyle: {
    height: IndicatorHeight,
    marginHorizontal: 40,
    width: indicatorContainerWidth,
  },
  indicatorContainer: {
    alignItems: 'center',
    marginTop: 5,
    width: indicatorContainerWidth,
    marginLeft: 15,
  },
});

export default React.memo(ScrollIndicator);

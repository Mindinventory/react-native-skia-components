import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import {
  Canvas,
  Group,
  RoundedRect,
  Skia,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';

import { useFancyScrollIndicator } from './useFancyScrollIndicator';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';

import {
  canvasStyle,
  scrollIndicatorStyle,
} from './fancyScrollIndicator.style';

var bgWidth = 0;

const FancyScrollIndicator = (props: IFancyScrollIndicatorProp) => {
  const {
    data,
    indicatorBorderColor,
    indicatorContainerWidth,
    indicatorHeight,
    indicatorItemColor,
    indicatorRadius,
    indicatorSpeed,
    innerViewLineColor,
    renderItem,
    xPosition,
  } = useFancyScrollIndicator({ props });

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
    var scrollInWidth = 0;
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
            height={indicatorHeight}
            r={indicatorRadius}
            origin={{
              x: 10,
              y: 8,
            }}
            color={innerViewLineColor}
            style={'stroke'}
            strokeWidth={0.9}
          />
          {index === 2 && getscrollIndicatorComponent()}
        </Group>
      );
    });
  };

  const getscrollIndicatorComponent = () => {
    return (
      <RoundedRect
        x={scrollmin / 2.5} //12
        y={indicatorHeight / 3.5} //4
        height={indicatorHeight / 2}
        width={indicatorHeight / 2}
        style={'fill'}
        color={indicatorItemColor}
        origin={{
          x: scrollmin / 2.5 + 4, //16
          y: indicatorHeight / 2, //9
        }}
        transform={rotationValue}
      />
    );
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
            rotateValue.current -= indicatorSpeed;
            if (rotateValue.current < 0) {
              rotateValue.current = 0;
            }
          } else {
            rotateValue.current += indicatorSpeed;
          }

          animationValue.current = calculated;
        }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
      <View
        style={[
          scrollIndicatorStyle(indicatorContainerWidth).indicatorContainer,
        ]}
      >
        <Canvas
          style={[
            canvasStyle(indicatorHeight, indicatorContainerWidth).canvasStyle,
          ]}
          children={
            <>
              <RoundedRect
                x={0}
                y={0}
                width={indicatorContainerWidth - 1}
                height={indicatorHeight}
                r={indicatorRadius}
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

export default React.memo(FancyScrollIndicator);

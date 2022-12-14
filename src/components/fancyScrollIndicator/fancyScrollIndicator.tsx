import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import { Canvas, Group, RoundedRect } from '@shopify/react-native-skia';

import {
  canvasStyle,
  scrollIndicatorStyle,
} from './fancyScrollIndicator.style';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';
import { useFancyScrollIndicator } from './useFancyScrollIndicator';

var scrollMin = 1;
var scrollInWidth = 0;

const FancyScrollIndicator = <T,>(props: IFancyScrollIndicatorProp<T>) => {
  const {
    indicatorBorderColor,
    indicatorContainerWidth,
    indicatorHeight,
    indicatorItemColor,
    indicatorRadius,
    innerViewLineColor,
    rotationValue,
    translate,
    translateX,
    handleScroll,
    xPosition,
  } = useFancyScrollIndicator({ props });

  //MARK: - Inner slider

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
        scrollMin = scrollInWidth;
      }
      return (
        <Group
          key={index.toString()}
          style={'fill'}
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
          {index === 2 ? (
            <RoundedRect
              x={scrollMin / 2.5} //12
              y={indicatorHeight / 3.5} //4
              height={indicatorHeight / 2}
              width={indicatorHeight / 2}
              style={'fill'}
              color={indicatorItemColor}
              origin={{
                x: scrollMin / 2.5 + 4, //16
                y: indicatorHeight / 2, //9
              }}
              transform={rotationValue}
            />
          ) : null}
        </Group>
      );
    });
  };

  //MARK: - Custom error
  const throwErrorMessage = () => {
    throw new Error('Currently we are support for only horizontal direction');
  };

  return (
    <SafeAreaView>
      {props.horizontal ? (
        <>
          <FlatList
            {...props}
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => handleScroll({ e, scrollMin })}
          />
          <View
            style={[
              scrollIndicatorStyle(indicatorContainerWidth).indicatorContainer,
            ]}
          >
            <Canvas
              style={[
                canvasStyle(indicatorHeight, indicatorContainerWidth)
                  .canvasStyle,
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
                  <Group transform={translateX}>{getSliderSubView()}</Group>
                </>
              }
              accessibilityLabelledBy={undefined}
              accessibilityLanguage={undefined}
            />
          </View>
        </>
      ) : (
        throwErrorMessage()
      )}
    </SafeAreaView>
  );
};

export default FancyScrollIndicator;

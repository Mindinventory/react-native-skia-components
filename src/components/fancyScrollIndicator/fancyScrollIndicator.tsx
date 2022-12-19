import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import { Canvas, Group, RoundedRect } from '@shopify/react-native-skia';

import { FancyScrollConstant } from './fancyScroll.constant';
import type { IFancyScrollIndicatorProp } from './fancyScrollIndicator.type';
import { useFancyScrollIndicator } from './useFancyScrollIndicator';

var scrollMin = FancyScrollConstant.default.scrollMinInitialval;
var scrollInWidth = FancyScrollConstant.default.scrollIndicatorWidthInitial;

const FancyScrollIndicator = <T,>(props: IFancyScrollIndicatorProp<T>) => {
  const {
    handleScroll,
    indicatorBorderColor,
    indicatorContainerWidth,
    indicatorHeight,
    indicatorItemColor,
    indicatorRadius,
    innerViewLineColor,
    rotationValue,
    scrollEventThrottle,
    styles,
    throwErrorMessage,
    translate,
    translateX,
    xPosition,
  } = useFancyScrollIndicator({ props });

  //MARK: - Inner slider

  const getSliderSubView = () => {
    return new Array(3).fill('').map((_item, index) => {
      const nextIndex = index + 1;
      const indexes = index + 1;

      if (index === 0) {
        scrollInWidth =
          indicatorContainerWidth *
          FancyScrollConstant.subIndicatorlayer.largeIndicatorMultiplier;
      } else if (index === 1) {
        scrollInWidth =
          indicatorContainerWidth *
          FancyScrollConstant.subIndicatorlayer.mediumIndicatorMultiplier;
      } else if (index === 2) {
        scrollInWidth =
          indicatorContainerWidth *
          FancyScrollConstant.subIndicatorlayer.smallIndicatorMultiplier;
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
              x: FancyScrollConstant.subIndicatorlayer.initialXPosition,
              y: FancyScrollConstant.subIndicatorlayer.initialYPosition,
            }}
            color={innerViewLineColor}
            style={'stroke'}
            strokeWidth={FancyScrollConstant.subIndicatorlayer.strockWidth}
          />
          {index === 2 ? (
            <RoundedRect
              x={
                scrollMin /
                FancyScrollConstant.centerSquareView.subLayerXDevider
              }
              y={
                indicatorHeight /
                FancyScrollConstant.centerSquareView.subLayerYDevider
              }
              height={
                indicatorHeight /
                FancyScrollConstant.centerSquareView.subLayerSizeDevider
              }
              width={
                indicatorHeight /
                FancyScrollConstant.centerSquareView.subLayerSizeDevider
              }
              style={'fill'}
              color={indicatorItemColor}
              origin={{
                x:
                  scrollMin /
                    FancyScrollConstant.centerSquareView
                      .subLayerOriginXDevider +
                  FancyScrollConstant.centerSquareView
                    .subLayerOriginXPlusDevider,
                y:
                  indicatorHeight /
                  FancyScrollConstant.centerSquareView.subLayerOriginYDevider,
              }}
              transform={rotationValue}
            />
          ) : null}
        </Group>
      );
    });
  };

  return (
    <SafeAreaView>
      {props.horizontal ? (
        <>
          <FlatList
            {...props}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={scrollEventThrottle}
            onScroll={(e) => handleScroll({ e, scrollMin })}
          />
          <View
            style={[
              styles.fancyScrollIndicatorStyle.indicatorContainer,
              {
                width: indicatorContainerWidth,
              },
            ]}
          >
            <Canvas
              style={[
                styles.fancyScrollCanvasStyle.canvasStyle,
                {
                  height: indicatorHeight,
                  width: indicatorContainerWidth,
                },
              ]}
              children={
                <>
                  <RoundedRect
                    x={FancyScrollConstant.indicator.mainRoundedViewXPosition}
                    y={FancyScrollConstant.indicator.mainRoundedViewYPosition}
                    width={indicatorContainerWidth - 1}
                    height={indicatorHeight}
                    r={indicatorRadius}
                    color={indicatorBorderColor}
                    style={'stroke'}
                    strokeWidth={
                      FancyScrollConstant.indicator.mainRoundedViewStrokeWidth
                    }
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

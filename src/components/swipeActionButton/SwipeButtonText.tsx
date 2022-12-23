import React, { FC } from 'react';
import { Animated, StyleSheet, TextStyle } from 'react-native';

interface SwipeButtonText {
  translateX: Animated.Value & { _value?: number };
  title: string;
  textStyle?: TextStyle;
  customText?: JSX.Element;
}
export const SwipeButtonText: FC<SwipeButtonText> = ({
  translateX,
  title,
  textStyle,
  customText,
}) => {
  return (
    <Animated.View
      style={[
        styles.titleContainer,
        {
          opacity: translateX.interpolate({
            inputRange: [0, 180, 210],
            outputRange: [1, 0.3, 0],
          }),
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 60],
              }),
            },
          ],
        },
      ]}
    >
      {customText ? (
        customText
      ) : (
        <Animated.Text
          numberOfLines={2}
          allowFontScaling={false}
          style={[styles.title, textStyle]}
          testID="Title"
        >
          {title}
        </Animated.Text>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 16,
    maxWidth: '50%',
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

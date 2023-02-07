import type {
  Animated,
  GestureResponderHandlers,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface SwipeActionButtonProps {
  onComplete: () => void;
  onError: boolean;
  setOnError: (error: boolean) => void;
  width?: number;
  disabled?: boolean;
  completeThresholdPercentage?: number;
  containerStyle?: StyleProp<ViewStyle>;
  height?: number;
  borderRadius?: number;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  customText?: JSX.Element;
  icon?: JSX.Element;
  activityIndicator?: JSX.Element;
  circleBackgroundColor?: string;
  backgroundColor?: string;
}

export interface SwipeButtonCircleProps {
  panHandlers: GestureResponderHandlers;
  Icon?: JSX.Element;
  translateX: Animated.Value;
  circleBackgroundColor?: string;
  borderRadius?: number;
  height: number;
  scrollDistance: number;
}

export interface SwipeButtonTextProps {
  translateX: Animated.Value & { _value?: number };
  title: string;
  textStyle?: StyleProp<TextStyle>;
  customText?: JSX.Element;
  width: number;
}

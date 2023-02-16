import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface SwipableCardsProps {
  data: Array<any>;
  animateAllDirection?: boolean;
  fadeNextCardAnimation?: boolean;
  cardStackTopSpace?: number;
  cardStackBottomSpace?: number;
  cardHeight?: number;
  cardSpace?: number;
  cardView: (item: any) => JSX.Element | undefined;
  cardWidth?: number;
  leftOverlapView: () => JSX.Element | undefined;
  overlayCardContainerStyle?: StyleProp<ViewStyle>;
  rightOverlapView: () => JSX.Element | undefined;
  controlViews?: Array<JSX.Element>;
  onControlPress?: (index: number) => void;
  onPress?: (item: any) => void;
}

export interface CardOverlayContainerInterface {
  overlayCardContainerStyle?: StyleProp<ViewStyle>;
  leftOverlapView?: React.ReactNode;
  rightOverlapView?: React.ReactNode;
}

import type {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

export interface IFancyScrollIndicatorProp<ItemT>
  extends Omit<FlatListProps<ItemT>, 'onScroll'> {
  indicatorItemColor?: string;
  indicatorBorderColor?: string;
  innerViewLineColor?: string;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

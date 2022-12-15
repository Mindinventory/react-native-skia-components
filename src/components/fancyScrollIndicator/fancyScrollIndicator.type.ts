import type {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

export interface IFancyScrollIndicatorProp<ItemT>
  extends Omit<FlatListProps<ItemT>, 'onScroll'> {
  /**
   * Provide colors of indicator item.
   * @example
   * indicatorItemColor={'red'}
   * indicatorItemColor={'rgb(0,0,0)'}
   * indicatorItemColor={'#ffffff'}
   * @default'white'.
   * @type string
   */
  indicatorItemColor?: string;

  /**
   * Provide colors of indicator border.
   * @example
   * indicatorBorderColor={'red'}
   * indicatorBorderColor={'rgb(0,0,0)'}
   * indicatorBorderColor={'#ffffff'}
   * @default'white'.
   * @type string
   */
  indicatorBorderColor?: string;

  /**
   * Provide colors of main rounded view line.
   * @example
   * innerViewLineColor={'red'}
   * innerViewLineColor={'rgb(0,0,0)'}
   * innerViewLineColor={'#ffffff'}
   * @default'white'.
   * @type string
   */
  innerViewLineColor?: string;

  /**
   * This controls how often the scroll event will be fired while scrolling (as a time interval in ms).
   * A lower number yields better accuracy for code that is tracking the scroll position,
   * but can lead to scroll performance problems due to the volume of information being sent over the bridge.
   * The default value is zero, which means the scroll event will be sent only once each time the view is scrolled.
   */
  scrollEventThrottle?: number;

  /**
   * Fires at most once per frame during scrolling.
   * The frequency of the events can be contolled using the scrollEventThrottle prop.
   */
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

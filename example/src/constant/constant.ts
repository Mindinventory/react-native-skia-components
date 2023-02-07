import { Dimensions } from 'react-native';

export const bullets = '\u2022';

const DEFAULT_HEIGHT = 70;
const DEFAULT_WIDTH = Dimensions.get('window').width * 0.9;
const DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE = 70;
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
export {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE,
};

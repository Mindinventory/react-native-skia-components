import { Dimensions } from 'react-native';

import { cardStyle, circularProgressBarStyle } from '../components';
import { floatingButtonStyle } from '../components/floatingButton';
import { neoPopButtonStyle } from '../components/neoPopButton';
import { starWarButtonStyle } from '../components/starWarButton/starWarButton.style';
import { swiperCardStyle } from '../components/SwipableCard/swiperCard.style';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
    ScreenHeight,
    ScreenWidth,
    starWarButtonStyle: starWarButtonStyle(),
    swiperCardStyle: swiperCardStyle(),
  };
};

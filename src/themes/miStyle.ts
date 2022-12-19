import { Dimensions } from 'react-native';

import { cardStyle, circularProgressBarStyle } from '../components';
import { flipViewStyle } from '../components/flipView/flipView.style';
import { floatingButtonStyle } from '../components/floatingButton';
import { neoPopButtonStyle } from '../components/neoPopButton';
import { starWarButtonStyle } from '../components/starWarButton/starWarButton.style';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    flipViewStyle: flipViewStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
    ScreenHeight,
    ScreenWidth,
    starWarButtonStyle: starWarButtonStyle(),
  };
};

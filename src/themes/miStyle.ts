import { Dimensions } from 'react-native';

import { cardStyle, circularProgressBarStyle } from '../components';
import {
  canvasStyle,
  scrollIndicatorStyle,
} from '../components/fancyScrollIndicator/fancyScrollIndicator.style';
import { floatingButtonStyle } from '../components/floatingButton';
import { neoPopButtonStyle } from '../components/neoPopButton';
import { starWarButtonStyle } from '../components/starWarButton/starWarButton.style';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    fancyScrollCanvasStyle: canvasStyle(),
    fancyScrollIndicatorStyle: scrollIndicatorStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
    ScreenHeight,
    ScreenWidth,
    starWarButtonStyle: starWarButtonStyle(),
  };
};

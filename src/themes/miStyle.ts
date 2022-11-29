import { cardStyle, circularProgressBarStyle } from '../components';
import { indicatorStyle } from '../components/fancyScrollIndicator/scrollIndicator.style';
import { floatingButtonStyle } from '../components/floatingButton';
import { neoPopButtonStyle } from '../components/neoPopButton';

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    indicatorStyle: indicatorStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
  };
};

import { cardStyle, circularProgressBarStyle } from '../components';
import { floatingButtonStyle } from '../components/floatingButton';
import { neoPopButtonStyle } from '../components/neoPopButton';
import { starWarButtonStyle } from '../components/starWarButton/starWarButton.style';

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
    starWarButtonStyle: starWarButtonStyle(),
  };
};

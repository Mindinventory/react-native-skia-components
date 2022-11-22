import { cardStyle, circularProgressBarStyle } from '../components';
import { floatingButtonStyle } from '../components/floatingButton/floatingButton.style';
import { neoPopButtonStyle } from '../components/neoPopButton/neoPopButton.style';

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
  };
};

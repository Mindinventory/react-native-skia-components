import { cardStyle, circularProgressBarStyle } from '../components';
import { floatingButtonStyle } from '../components/floatingButton';
import { neoPopButtonStyle } from '../components/neoPopButton';

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
  };
};

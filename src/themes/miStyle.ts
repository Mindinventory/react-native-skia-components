import { cardStyle, circularProgressBarStyle } from '../components';
import { floatingButtonStyle } from '../components/floatingButton';
import { lineChartStyle } from '../components/lineChart/lineChart.style';
import { neoPopButtonStyle } from '../components/neoPopButton';

export const miUiStyle = () => {
  return {
    cardStyle: cardStyle(),
    circularProgressBarStyle: circularProgressBarStyle(),
    floatingButtonStyle: floatingButtonStyle(),
    lineChartStyle: lineChartStyle(),
    neoPopButtonStyle: neoPopButtonStyle(),
  };
};

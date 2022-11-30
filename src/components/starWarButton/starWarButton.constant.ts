import { miColor } from '../../themes';
import { FilledType, GradientType } from './starWarButton.type';

export const StarWarButtonConstant = {
  default: {
    animation: true,
    animationDuration: 3000,
    backgroundColor: '#ffffff',
    blurRadius: 10,
    buttonBorderRadius: 10,
    buttonEffectDuration: 250,
    buttonPadding: 30,
    canvasPadding: 40,
    filled: FilledType.solid,
    gradientType: GradientType.linear,
    height: 100,
    perspective: 300,
    rotateValueFrom: 0,
    rotateValueTo: 6.3,
    title: 'Button',
    titleColor: miColor.black,
    titleSize: 20,
    width: 200,
  },
};

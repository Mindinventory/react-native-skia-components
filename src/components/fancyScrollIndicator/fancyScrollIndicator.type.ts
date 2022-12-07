export interface IFancyScrollIndicatorProp {
  indicatorItemColor?: string;
  indicatorBorderColor?: string;
  innerViewLineColor?: string;
  renderItem: (data: any, index: number) => JSX.Element;
  data: Array<any>;
}

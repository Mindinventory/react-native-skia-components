import type { Fit } from '@shopify/react-native-skia';

const JUNO = [
  1, 0, 0, 0, 0, -0.4, 1.3, -0.4, 0.2, -0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
];
const SEPIA = [
  0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0,
  0, 0, 0, 0, 1, 0,
];
const GREYSCALE = [
  0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152,
  0.0722, 0, 0, 0, 0, 0, 1, 0,
];
const GINGHAM = [2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0.5, 0, 1, 0, 0, 0, 0, 0, 1, 0];
const MAYFAIR = [
  1, 1, 0.5, 0, 0, 0, 0.5, 1, 0, 0, 0.5, 0.5, 1, 0, 0, 0, 0, 0, 1, 0,
];
const VALENCIA = [
  1, 0, 0, 0, 0, -0.2, 1, 0, 0, 0, -0.8, 1.6, 1, 0, 0, 0, 0, 0, 1, 0,
];
const NONE = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

export const ImageColorMatrix = {
  GINGHAM: GINGHAM,
  GREYSCALE: GREYSCALE,
  JUNO: JUNO,
  MAYFAIR: MAYFAIR,
  NONE: NONE,
  SEPIA: SEPIA,
  VALENCIA: VALENCIA,
};
export interface SkiaImageProps {
  clip?: boolean;
  clipPadding?: number;
  clipRadius?: number;
  filterMatrix?: number[];
  height: number;
  imageSizeMode?: Fit;
  invertClip?: boolean;
  padding?: number;
  radius?: number;
  source: string;
  width: number;
  blur?: number
}

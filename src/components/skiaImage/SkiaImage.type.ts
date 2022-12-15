import type { Fit, SkImage } from '@shopify/react-native-skia';

import {
  GINGHAM,
  GREYSCALE,
  JUNO,
  MAYFAIR,
  NONE,
  SEPIA,
  VALENCIA,
} from './ImageFilters.type';
export interface SkiaImageProps {
  /**
   * Provide make clipped to Image
   * @example
   * clip={true}
   * @default false
   * @type boolean
   */
  clip?: boolean;

  /**
   * Provide padding to innver clipped Image part
   * @example
   * clipPadding={30}
   * @default 10
   * @type number
   */
  clipPadding?: number;

  /**
   * Provide radius to clipped Image
   * @example
   * clipRadius={10}
   * @default 50
   * @type number
   */
  clipRadius?: number;

  /**
   * Provide array of number value to add image filter to Image
   * @example
   * filterMatrix={[1, 1, 0.5, 0, 0, 0, 0.5, 1, 0, 0, 0.5, 0.5, 1, 0, 0, 0, 0, 0, 1, 0]}
   * @deafult [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
   * @type Array<number>
   */
  filterMatrix?: number[];

  /**
   * Provide height to Image
   * @example
   * height={180}
   * @type number
   */
  height: number;

  /**
   * Provide true/false based on clipping image to inverted or not
   * @example
   * imageSizeMode={false}
   * @default cover
   * @type object
   */
  imageSizeMode?: Fit;

  /**
   * Provide true/false based on clipping image to inverted or not
   * @example
   * invertClip={false}
   * @default false
   * @type boolean
   */
  invertClip?: boolean;

  /**
   * Provide padding to clipped Image
   * @example
   * padding={30}
   * @default 10
   * @type number
   */
  padding?: number;

  /**
   * Provide image url to show in Image
   * @example
   * source={'https://avatars.githubusercontent.com/u/16474404?s=200&v=4'}
   * @type string
   */
  source: string;

  /**
   * Provide width to Image
   * @example
   * width={180}
   * @type number
   */
  width: number;

  /**
   * Provide blur on Image
   * @example
   * blur={5}
   * @default 0
   * @type number
   */
  blur?: number;
}

export const ImageColorMatrix = {
  GINGHAM: GINGHAM,
  GREYSCALE: GREYSCALE,
  JUNO: JUNO,
  MAYFAIR: MAYFAIR,
  NONE: NONE,
  SEPIA: SEPIA,
  VALENCIA: VALENCIA,
};

export interface IRNImage {
  x: number;
  y: number;
  height: number;
  width: number;
  blur: number;
  image: SkImage;
  imageSizeMode: Fit;
  filterMatrix: number[];
}

import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-skia-component' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ default: '', ios: "- You have run 'pod install'\n" }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const SkiaComponent = NativeModules.SkiaComponent
  ? NativeModules.SkiaComponent
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return SkiaComponent.multiply(a, b);
}

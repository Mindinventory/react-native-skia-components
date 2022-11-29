import { useEffect } from 'react';
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@mindinventory/react-native-skia-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ default: '', ios: "- You have run 'pod install'\n" }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeSkiaComponent = NativeModules.ReactNativeNeopop
  ? NativeModules.ReactNativeNeopop
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// eslint-disable-next-line no-console
console.log('ReactNativeSkiaComponent', ReactNativeSkiaComponent);

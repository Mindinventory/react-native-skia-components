
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReactNativeNeopopSpec.h"

@interface ReactNativeNeopop : NSObject <NativeReactNativeNeopopSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ReactNativeNeopop : NSObject <RCTBridgeModule>
#endif

@end

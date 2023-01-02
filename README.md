# @mindinventory/react-native-skia-components [![](https://img.shields.io/npm/v/@mindinventory/react-native-skia-components.svg)](https://www.npmjs.com/package/@mindinventory/react-native-skia-components) ![@mindinventory/React Native Skia Components Top Language](https://img.shields.io/github/languages/top/Mindinventory/react-native-skia-components) ![@mindinventory/React Native Skia Components TypeScript](https://badgen.net/npm/types/tslib) ![@mindinventory/React Native Skia Components License](https://img.shields.io/github/license/mindinventory/react-native-skia-components) ![IOS](https://img.shields.io/badge/IOS-9cf) ![Android](https://img.shields.io/badge/Android-green)

This library provide UIKit like Card, NeoPop button and Floating button.

<a href="https://www.mindinventory.com/?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-skia-components">![@mindinventory react-native-skia-components](https://user-images.githubusercontent.com/104554054/206368640-89fce526-5151-4b63-a39f-4a855ad14be9.gif)</a>

## Installation

using npm

```sh
npm install @mindinventory/react-native-skia-components
```

using yarn

```sh
yarn add @mindinventory/react-native-skia-components
```

> :warning: Now we need to install [`react-native-skia(>=0.1.169)`](https://github.com/Shopify/react-native-skia) and [`react-native-reanimated(>=2.0.0)`](https://github.com/software-mansion/react-native-reanimated).

### Included Components

- AnimatedCard ('yoyo' | 'disco' | 'rotate' | 'bounce')
- NeoPopButton
- FloatingButton
- FlipView

### Upcoming Components

- Fancy Scroll Indicator
- Amazing Line & Bar Chart
- Circular Progress Bar
- Star-War Buttons

### Supported platform

- Android
- iOS

## Usage

```js
import {
  Card,
  NeoPopButton,
  FloatingButton,
} from '@mindinventory/react-native-skia-components';
```

# Card

```js
<Card
  backgroundColor={'#000'}
  blur={10}
  borderColors={['cyan', 'magenta', 'yellow', 'cyan']}
  borderWidth={5}
  cardRadius={20}
  height={220}
  width={310}
  animation={'rotate'}
  animateBorder={'normal'}
  duration={1000}
>
{...}
</Card>
```

```js
animation={'rotate'}
animateBorder={'normal'}
```

![cardJeko](https://user-images.githubusercontent.com/104554054/205283144-d7020c40-8e49-433f-9f39-fa5a984bb29e.gif)

```js
animation={'bounce'}
animateBorder={'normal'}
```

![card](https://user-images.githubusercontent.com/104554054/205283171-993ec474-ad73-4b6c-8449-cf1ec031c4c2.gif)

```js
animation={'none'}
animateBorder={'normal'}
```

![card3](https://user-images.githubusercontent.com/104554054/205283190-18b3db6e-dfd1-45a7-b988-bee258fe7f1d.gif)

```js
animation={'rotate'}
animateBorder={'disco'}
```

![thank](https://user-images.githubusercontent.com/104554054/205297001-87106883-a507-4208-b5ae-f1162922f525.gif)

# Neopop

```js
<NeoPopButton
  backgroundColor={'#f96b8f'}
  bottomShadowColor={'#363636'}
  depth={10}
  height={80}
  sideShadowColor={'#363636'}
  isFloating={false}
  textStyle={{
    color: 'white',
    ...textStyle
  }}
  title={`Neo Pop Button`}
  width={80}
  onPress={()=>{}}
  shadowHeight={15}
  sideShadowColor={"rgba(250, 226, 46, 1)"}
  style={...style}
  titleSize={10}
  disabled={false}
/>
```

![neoPop](https://user-images.githubusercontent.com/104554054/205282417-e10ca1da-cfe6-46b7-ae2b-0fb7843951fe.gif)

# Floating

```js
<FloatingButton
  backgroundColor={'rgba(250, 226, 46,1)'}
  bottomShadowColor={'rgba(0, 0, 0,1)'}
  depth={25}
  height={200}
  isFloating={true}
  shadowHeight={20}
  sideShadowColor={'rgba(195, 161, 60,1)'}
  textStyle={{
    fontSize: 24,
  }}
  title={'Press Me'}
  width={300}
/>
```

<img width="364" alt="Screenshot 2022-11-14 at 11 19 29 AM" src="https://user-images.githubusercontent.com/82019401/201585018-814ca046-a13f-4d1a-9396-1282b6f1e7db.png">

# FlipView

```js
<FlipView
  style={styles.cardContainer}
  flipDirection={'horizontal'}
  flipZoom={0.1}
  ref={flipRef}
  duration={1000}
  perspective={1000}
  frontView={<View style={{ flex: 1, backgroundColor: 'red' }} />}
  backView={<View style={{ flex: 1, backgroundColor: 'green' }} />}
/>
```

![flipview](https://user-images.githubusercontent.com/104554054/208624029-6363f5c8-6bd8-41e5-a3ab-095bf7be4bc5.gif)

# Props to use

# Card Props

| Parameter       | Type                       | Description                                                          |
| --------------- | -------------------------- | -------------------------------------------------------------------- |
| width           | _number (Optional)_        | Set width of card layout.                                            |
| height          | _number (Optional)_        | Set height of card layout.                                           |
| backgroundColor | _string (Optional)_        | Set background of card.                                              |
| cardRadius      | _number (Optional)_        | Set corner radius of card.                                           |
| borderWidth     | _number (Optional)_        | Set border width of card.                                            |
| borderColors    | _Array<string> (Optional)_ | Set border gradient color of card.                                   |
| blur            | _number (Optional)_        | Set border blur radius of card.                                      |
| animation       | string                     | Set animation of card in ('rotate', 'bounce', 'none').               |
| animateBorder   | string                     | Set animation of card border in ('normal', 'disco', 'none', 'yoyo'). |
| duration        | number                     | Set duration of animating border of card.                            |

# NeoPopButton Props

| Parameter         | Type                 | Description                                                          |
| ----------------- | -------------------- | -------------------------------------------------------------------- |
| style             | _style (Optional)_   | Give style of button.                                                |
| title             | _string (Optional)_  | Title of button.                                                     |
| width             | _number (Optional)_  | Set width of button.                                                 |
| height            | _number (Optional)_  | Set height of button.                                                |
| depth             | _number (Optional)_  | Set depth of button.                                                 |
| shadowHeight      | _number (Optional)_  | Add shadow height for button.                                        |
| backgroundColor   | _string (Optional)_  | Add background color to button.                                      |
| bottomShadowColor | _string (Optional)_  | Add bottom shadow color of button.                                   |
| sideShadowColor   | _string (Optional)_  | Add right shadow color of button.                                    |
| textStyle         | _style (Optional)_   | Give TextStyle button title texts.                                   |
| titleSize         | _number (Optional)_  | Set text size of title.                                              |
| isFloating        | _boolean (Optional)_ | set value `true` or `false` to get either Floating or NeoPop button. |
| floatAnimation    | _boolean (Optional)_ | set value `true` or `false` to get button float animation on or off. |
| duration          | _number (Optional)_  | set duration of the floatAnimation of the button.                    |
| disabled          | _boolean (Optional)_ | set button disabled or not.                                          |

# FloatingButton Props

| Parameter         | Type                 | Description                                         |
| ----------------- | -------------------- | --------------------------------------------------- |
| style             | _style (Optional)_   | Give style of button.                               |
| title             | _string (Optional)_  | Title of button.                                    |
| width             | _number (Optional)_  | Set width of button.                                |
| height            | _number (Optional)_  | Set height of button.                               |
| depth             | _number (Optional)_  | Set depth of button.                                |
| shadowHeight      | _number (Optional)_  | Add shadow height for button.                       |
| backgroundColor   | _string (Optional)_  | Add background color to button.                     |
| bottomShadowColor | _string (Optional)_  | Add bottom shadow color of button.                  |
| sideShadowColor   | _string (Optional)_  | Add right shadow color of button.                   |
| textStyle         | _style (Optional)_   | Give TextStyle button title texts.                  |
| titleSize         | _number (Optional)_  | Set text size of title.                             |
| isFloating        | _boolean (Optional)_ | set value `true` or `false` to get Floating button. |

# FlipView Props

| Parameter        | Type                     | Description                                                                   |
| ---------------- | ------------------------ | ----------------------------------------------------------------------------- |
| style            | _style (Optional)_       | Provide an style to inner elements of the `FlipView`.                         |
| frontView        | _JSX.ELement (Required)_ | Element that render on `Front` side of the view.                              |
| backView         | _JSX.ELement (Required)_ | Element that render on `Back` side of the view.                               |
| flipZoom         | _number (Optional)_      | Provide an flipZoom scale of the view when it animate.                        |
| flipDirection    | _string (Optional)_      | Provide an flipDirection of the view that in horizontal or vertical.          |
| perspective      | _number (Optional)_      | Provide an perspective value of the view for zIndex.                          |
| duration         | _number (Optional)_      | Duration of the flip card animation.                                          |
| ref(FlipViewRef) | _React.ElementRef_       | To flip the view use flip() function. and get value of is view or not isFlip. |

## Contributing!

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## 📱 Check out other lists of our Mobile UI libraries

<a href="https://github.com/Mindinventory?language=kotlin">
<img src="https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white"> </a>

<a href="https://github.com/Mindinventory?language=swift">
<img src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white"> </a>

<a href="https://github.com/Mindinventory?language=dart">
<img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"> </a>

<a href="https://github.com/Mindinventory?q=react-native&type=all">
<img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> </a>

<br></br>

## 💻 Check out other lists of Web libraries

<a href="hhttps://github.com/Mindinventory?language=javascript">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></a>

<a href="https://github.com/Mindinventory?language=go">
<img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white"></a>

<a href="https://github.com/Mindinventory?language=python">
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"></a>
<br></br>

<h4><a href="https://www.mindinventory.com/whitepapers.php?utm_source=gthb&utm_medium=special&utm_campaign=react-native-skia-components"><u> 📝 Get FREE Industry WhitePapers →</u></a></h4>

## Check out our Work

<a href="https://dribbble.com/mindinventory">
<img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" /> </a>
</br>

### Library used

- [React-Native-Skia](https://github.com/Shopify/react-native-skia)
- [React-Native-Reanimated](https://github.com/software-mansion/react-native-reanimated)

## License!

@mindinventory/react-native-skia-components [MIT-licensed](./LICENSE).

# Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-skia-components" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/blob/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>

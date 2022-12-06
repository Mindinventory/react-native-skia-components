# @mindinventory/react-native-skia-components

This library provide UIKit like Card, NeoPop button and and Floating button.

## Installation

using npm

```sh
npm install @mindinventory/react-native-skia-components
```

using yarn

```sh
yarn add @mindinventory/react-native-skia-components
```

## Preview

![navy and yellow modern business banner](https://user-images.githubusercontent.com/87525902/205893437-5280e346-4643-4621-bd80-934716f31753.gif)


### Supported platform

- Android
- Ios

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

# Props to use

# Card Props

| Parameter       | Type                       | Description                        |
| --------------- | -------------------------- | ---------------------------------- |
| width           | _number (Optional)_        | Set width of card layout.          |
| height          | _number (Optional)_        | Set height of card layout.         |
| backgroundColor | _string (Optional)_        | Set background of card.            |
| cardRadius      | _number (Optional)_        | Set corner radius of card.         |
| borderWidth     | _number (Optional)_        | Set border width of card.          |
| borderColors    | _Array<string> (Optional)_ | Set border gradient color of card. |
| blur            | _number (Optional)_        | Set border blur radius of card.    |
| animation       |  string                    | Set animation of card in ('rotate', 'bounce', 'none').    |
| animateBorder   |  string                    | Set animation of card border in ('normal', 'disco', 'none', 'yoyo').    |
| duration        |  number                    | Set duration of animating border of card.    |

# NeoPopButton Props

| Parameter         | Type                 | Description                                                          |
| ----------------- | -------------------- | -------------------------------------------------------------------- |
| style             | _style (Optional)_   | Give style of button.                                                |
| title             | _string (Optional)_  | Title of button.                                                     |
| width             | _number (Optional)_  | Set width of button.                                                 |
| height            | _number (Optional)_  | Set height of button.                                                |
| depth             | _number (Optional)_  | Set depth of button.                                                 |
| shadowHeight      | _number (Optional)_  | Add shadow height for button.                                        |
| backgroundColor   | _string (Optional)_  | Add background color to button.                                       |
| bottomShadowColor | _string (Optional)_  | Add bottom shadow color of button.                                   |
| sideShadowColor   | _string (Optional)_  | Add right shadow color of button.                                    |
| textStyle         | _style (Optional)_   | Give TextStyle button title texts.                                   |
| titleSize         | _number (Optional)_  | Set text size of title.                                              |
| isFloating        | _boolean (Optional)_ | set value `true` or `false` to get either Floating or NeoPop button. |
| floatAnimation    | _boolean (Optional)_ | set value `true` or `false` to get button float animation on or off. |
| duration          | _number (Optional)_  | set duration of the floatAnimation of the button. |
| disabled          | _boolean (Optional)_ | set button disabled or not. |

# FloatingButton Props

| Parameter         | Type                 | Description                                                          |
| ----------------- | -------------------- | -------------------------------------------------------------------- |
| style             | _style (Optional)_   | Give style of button.                                                |
| title             | _string (Optional)_  | Title of button.                                                     |
| width             | _number (Optional)_  | Set width of button.                                                 |
| height            | _number (Optional)_  | Set height of button.                                                |
| depth             | _number (Optional)_  | Set depth of button.                                                 |
| shadowHeight      | _number (Optional)_  | Add shadow height for button.                                        |
| backgroundColor   | _string (Optional)_  | Add background color to button.                                       |
| bottomShadowColor | _string (Optional)_  | Add bottom shadow color of button.                                   |
| sideShadowColor   | _string (Optional)_  | Add right shadow color of button.                                    |
| textStyle         | _style (Optional)_   | Give TextStyle button title texts.                                   |
| titleSize         | _number (Optional)_  | Set text size of title.                                              |
| isFloating        | _boolean (Optional)_ | set value `true` or `false` to get Floating button. |
## Contributing!

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License!

@mindinventory/react-native-skia-components [MIT-licensed](https://github.com/Mindinventory/react-native-skia-components/blob/main/LICENSE).

# Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-skia-components" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/blob/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>

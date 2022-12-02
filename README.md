# @mindinventory/react-native-skia-components

This library provide UIKit like Buttons, Circle Progress and and Card layout.

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

![Simulator Screen Recording - iPhone 13 - 2022-12-01 at 15 10 54](https://user-images.githubusercontent.com/104554054/205020580-9d6e80bb-ec8d-40bc-a990-5378d142d3fe.gif)
![Simulator Screen Recording - iPhone 13 - 2022-11-11 at 15 26 23](https://user-images.githubusercontent.com/82019401/201333076-9c50a9df-f41c-4453-ba04-393fbdd957f0.gif)




https://user-images.githubusercontent.com/82019401/201672542-76016412-a8a0-4931-a59a-6942c1265c43.mp4

https://user-images.githubusercontent.com/82019401/201672555-2bc57323-b89f-4fa4-a9ac-5aa264bfb841.mp4






### Supported platform

- Android
- Ios

## Usage

```js
import {
  Button,
  Card,
  CircularProgressBar,
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

<img width="372" alt="Screenshot 2022-11-14 at 11 16 07 AM" src="https://user-images.githubusercontent.com/82019401/201584587-5d169c5b-1ae2-4608-ad56-49ee393389ba.png">

# Circle Progress

```js
<CircularProgressBar
  backgroundColor="#32363B"
  colors={['#2FB8FF', '#9EECD9']}
  containerSize={250}
  elevation={8}
  fontSize={32}
  gradientColors={['#101113', '#2B2F33']}
  padding={24}
  progress={50}
  radius={100}
  shadowColor={'#31C'}
  shadowOffset={{ width: 0, height: 4 }}
  shadowOpacity={0.6}
  shadowRadius={10}
  strokeWidth={15}
/>
```

<img width="303" alt="Screenshot 2022-11-14 at 11 18 46 AM" src="https://user-images.githubusercontent.com/82019401/201584919-627fcece-66e7-45ca-9b6a-ddc203d38901.png">


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
/>
```

<img width="415" alt="Screenshot 2022-11-14 at 11 19 48 AM" src="https://user-images.githubusercontent.com/82019401/201585058-3af9f8c2-c58d-4d01-9351-36bb4b37d2ef.png">

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

# Circle Progress Props

| Parameter       | Type                       | Description                                                |
| --------------- | -------------------------- | ---------------------------------------------------------- |
| progress        | _number_                   | set circle progress                                        |
| radius          | _number (Optional)_        | Set radius of circle progress.                             |
| colors          | _Array<string> (Optional)_ | Set gradient color of circle progress bar.                 |
| padding         | _number (Optional)_        | Set padding in circle progress.                            |
| fontSize        | _number (Optional)_        | Set font size of progress in circle progress.              |
| containerSize   | _number (Optional)_        | Set circle progress container size.                        |
| gradientColors  | _Array<string> (Optional)_ | Set gradient color of inner progress bar.                  |
| strokeWidth     | _number (Optional)_        | Set strock of progress.                                    |
| shadowOpacity   | _number (Optional)_        | Set opacity of progress shadow between `0` to `1`.         |
| shadowRadius    | _number (Optional)_        | Set corner radius of progress shadow.                      |
| elevation       | _number (Optional)_        | Set elevation for circle progress.                         |
| shadowColor     | _string (Optional)_        | Set shadow color of progress bar.                          |
| shadowOffset    | _object (Optional)_        | Set shadow offset of progress bar, (`width` and `height`). |
| backgroundColor | _object (Optional)_        | Set background of Circle inner view.                       |

# NeoPopButton Props

| Parameter         | Type                 | Description                                                          |
| ----------------- | -------------------- | -------------------------------------------------------------------- |
| style             | _style (Optional)_   | Give style of button.                                                |
| title             | _string (Optional)_  | Title of button.                                                     |
| width             | _number (Optional)_  | Set width of button.                                                 |
| height            | _number (Optional)_  | Set height of button.                                                |
| depth             | _number (Optional)_  | Set depth of button.                                                 |
| shadowHeight      | _number (Optional)_  | Add shadow height for button.                                        |
| backgroundColor   | _string (Optional)_  | Add backgroud color to button.                                       |
| bottomShadowColor | _string (Optional)_  | Add bottom shadow color of button.                                   |
| sideShadowColor   | _string (Optional)_  | Add right shadow color of button.                                    |
| textStyle         | _style (Optional)_   | Give TextStyle button title texts.                                   |
| titleSize         | _number (Optional)_  | Set text size of title.                                              |
| isFloating        | _boolean (Optional)_ | set value `true` or `false` to get either Flaoting or Neopop button. |
| floatAnimation    | _boolean (Optional)_ | set value `true` or `false` to get button float animation on or off. |
| duration          | _number (Optional)_  | set duration of the floatAnimation of the button. |

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

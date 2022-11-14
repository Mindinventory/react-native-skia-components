# @mindinventory/react-native-neopop

This library provide UIKit like Buttons, Circle Progress and and Card layout.

## Installation

using npm

```sh
npm install @mindinventory/react-native-neopop
```

using yarn

```sh
yarn add @mindinventory/react-native-neopop
```

## Preview

![Simulator Screen Recording - iPhone 13 - 2022-11-11 at 15 25 19](https://user-images.githubusercontent.com/82019401/201321527-9139c291-9b8a-4ff5-9842-4447c926e155.gif)
![Simulator Screen Recording - iPhone 13 - 2022-11-11 at 15 26 23](https://user-images.githubusercontent.com/82019401/201333076-9c50a9df-f41c-4453-ba04-393fbdd957f0.gif)

![Simulator Screen Recording - iPhone 13 - 2022-11-11 at 15 26 40](https://user-images.githubusercontent.com/82019401/201333091-a8ef2042-5774-4196-9572-504f5411ab50.gif)
![Simulator Screen Recording - iPhone 13 - 2022-11-11 at 15 26 55](https://user-images.githubusercontent.com/82019401/201333102-bf59f9c6-7ff3-4f00-8ae9-aa3ea5d5520d.gif)

### Supported platform

- Android
- Ios

## Usage

```js
import {
  Button,
  Card,
  CircularProgressBar,
} from '@mindinventory/react-native-neopop';
```

```js
<Card height={220} width={310} borderWidth={5}>
  {...}
</Card>
```

```js
    <CircularProgressBar progress={70} />
    <Button preset="neoPop" buttonDirection={Direction.Right} />
    <Button preset="floating" />
```

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

# Circle Progress Props

| Parameter       | Type                       | Description                                                |
| --------------- | -------------------------- | ------------------------------------------------------     |
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

# Button Props

| Parameter         | Type                 | Description                                                          |
| ----------------- | -------------------- | -------------------------------------------------------------------- |
| preset            | _string_             | Type of button that you need to show either `NeoPop` or `Floating`   |
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

## Contributing!

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License!

@mindinventory/react-native-neopop [MIT-licensed](https://github.com/Mindinventory/mindinventory/react-native-neopop/blob/main/LICENSE).

# Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-neopop" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/blob/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>

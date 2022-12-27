This library provide Flipview component which can flip horizontal or vertical.

## Installation

using npm

```sh
npm install @mindinventory/react-native-flip-view
```

using yarn

```sh
yarn add @mindinventory/react-native-flip-view
```

### Supported platform

- Android
- iOS

## Usage

# FlipView

```sh
import {
  FlipView,
  FlipViewRef,
} from '@mindinventory/react-native-flip-view';
```

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

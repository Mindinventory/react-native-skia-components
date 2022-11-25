const path = require('path');

const pak = require('../package.json');

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};

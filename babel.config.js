module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['@babel/plugin-proposal-decorators', {
      legacy: true,
    }],
    // 配置根目录的路径
    // ['babel-plugin-root-import', {
    //   rootPathSuffix: './src/',
    //   rootPathPrefix: '@/',
    // }],
  ],
};

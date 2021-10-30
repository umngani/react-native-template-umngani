module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['babel-plugin-styled-components'],
      ['module-resolver', { alias: { '@/root': '.', '@': './src' } }],
    ],
  };
};

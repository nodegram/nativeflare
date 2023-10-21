const path = require('path');
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.sourceExts = process.env.RN_SRC_EXT
  ? [...process.env.RN_SRC_EXT.split(',').concat(config.resolver.sourceExts), 'cjs', 'mjs']
  : [...config.resolver.sourceExts, 'cjs', 'mjs'];

const { withNativeWind } = require('nativewind/metro');
module.exports = withNativeWind(config, {
  input: 'global.css',
  inlineRem: 16,
  projectRoot,
});

module.exports = {
  apps: [
    {
      name: 'docs',
      script: 'cd ./apps/docs && yarn serve --port 9009',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'expo-demo',
      script: 'cd ./apps/expo-demo && yarn serve -l 9008',
      env: {
        NODE_ENV: 'production',
        EXPO_PREVIEW_URL: 'https://expo-demo.nativeflare.dev',
      },
    },
  ],
};

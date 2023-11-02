module.exports = {
  apps: [
    {
      name: 'docs',
      script: 'cd ./apps/docs && yarn start --port 9009',
    },
    {
      name: 'expo-demo',
      script: 'cd ./apps/expo-demo && yarn serve -l 9008',
    },
  ],
};

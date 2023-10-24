import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'ui';

const ButtonScreen = () => {
  const { title, variant, size } = useLocalSearchParams();

  const buttonTitle = title ? `${title}` : 'Button';
  const buttonVariant = variant ? `${variant}` : 'default';
  const buttonSize = size ? `${size}` : 'md';

  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center">
      <Button title={buttonTitle} variant={buttonVariant} size={buttonSize} />
    </View>
  );
};

export default ButtonScreen;

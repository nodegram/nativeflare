import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'ui';
import type { ButtonProps } from 'ui';

const ButtonScreen = () => {
  const { title, variant, size } = useLocalSearchParams();

  const buttonSize = (size ? `${size}` : 'md') as ButtonProps['size'];
  const buttonTitle = (title ? `${title}` : 'Button') as ButtonProps['title'];
  const buttonVariant = (variant ? `${variant}` : 'default') as ButtonProps['variant'];

  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center">
      <Button title={buttonTitle} variant={buttonVariant} size={buttonSize} />
    </View>
  );
};

export default ButtonScreen;

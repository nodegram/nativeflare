import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'ui';
import type { ButtonProps } from 'ui';

const ButtonScreen = () => {
  const { title, variant, size, busy } = useLocalSearchParams();

  const isButtonBusy = (busy ? `${busy}` : 'false') === 'true';
  const buttonSize = (size ? `${size}` : 'md') as ButtonProps['size'];
  const buttonVariant = (variant ? `${variant}` : 'default') as ButtonProps['variant'];

  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center">
      <Button variant={buttonVariant} size={buttonSize} busy={isButtonBusy}>
        {title ? `${title}` : 'button'}
      </Button>
    </View>
  );
};

export default ButtonScreen;

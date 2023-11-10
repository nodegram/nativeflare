import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Text } from 'ui';
import type { TextProps } from 'ui';

const TextScreen = () => {
  const { size, variant, text } = useLocalSearchParams();
  const textSize = (size ? `${size}` : 'md') as TextProps['size'];
  const textVariant = (variant ? `${variant}` : 'default') as TextProps['variant'];
  const textContent = (text ? `${text}` : 'Hello, World!') as TextProps['children'];

  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center">
      <Text size={textSize} variant={textVariant}>
        {textContent}
      </Text>
    </View>
  );
};

export default TextScreen;

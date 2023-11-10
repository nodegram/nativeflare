import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Heading } from 'ui';
import type { HeadingProps } from 'ui';

const HeadingScreen = () => {
  const { variant, accent, text } = useLocalSearchParams();
  const headingVariant = (variant ? `${variant}` : 'h1') as HeadingProps['variant'];
  const headingAccent = (accent ? `${accent}` : 'default') as HeadingProps['accent'];
  const headingText = (text ? `${text}` : 'Heading Text') as HeadingProps['children'];

  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center">
      <Heading variant={headingVariant} accent={headingAccent}>
        {headingText}
      </Heading>
    </View>
  );
};

export default HeadingScreen;

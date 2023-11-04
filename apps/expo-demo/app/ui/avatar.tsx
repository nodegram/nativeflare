import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from 'ui';
import type { AvatarProps } from 'ui';

const AvatarScreen = () => {
  const { size } = useLocalSearchParams();
  const buttonSize = (size ? `${size}` : 'md') as AvatarProps['size'];

  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center">
      <Avatar size={buttonSize}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </View>
  );
};

export default AvatarScreen;

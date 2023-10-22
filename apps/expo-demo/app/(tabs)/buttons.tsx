import { ScrollView, View } from 'react-native';
import { Button } from 'ui';

const ButtonsScreen = () => {
  return (
    <ScrollView className="bg-background">
      <View className="flex flex-col flex-1 gap-8 p-4">
        <View>
          <View className="flex flex-row gap-2 flex-wrap">
            <Button title="default" />
            <Button title="secondary" variant="secondary" />
            <Button title="outline" variant="outline" />
            <Button title="destructive" variant="destructive" />
            <Button title="ghost" variant="ghost" />
          </View>
        </View>
        <View>
          <View className="flex flex-row gap-2 items-end">
            <Button title="sm" size="sm" />
            <Button title="md" size="md" />
            <Button title="lg" size="lg" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ButtonsScreen;

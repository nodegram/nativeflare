import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert, AlertTitle, AlertDescription } from 'ui';

const Terminal = ({ className }: { className: string }) => (
  <View className={className}>
    <FontAwesome5 name="terminal" size={16} color="white" />
  </View>
);

const AlertScreen = () => {
  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center p-10">
      <Alert className="max-w-lg mx-auto">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    </View>
  );
};

export default AlertScreen;

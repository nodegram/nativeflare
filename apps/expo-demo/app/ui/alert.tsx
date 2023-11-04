import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from 'ui';

const AlertScreen = () => {
  return (
    <View className="bg-background flex flex-col flex-1 items-center justify-center p-10">
      <Alert className="max-w-lg mx-auto">
        <AlertIcon>
          <FontAwesome5 name="terminal" color="white" />
        </AlertIcon>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    </View>
  );
};

export default AlertScreen;

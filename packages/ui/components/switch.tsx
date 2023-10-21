import { Switch as NativeSwitch, SwitchProps as NativeSwitchProps, View } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

export const Switch = ({ value, className, ...props }: NativeSwitchProps) => {
  const colors = useThemeColors();
  const isEnabled = !!value;

  return (
    <View className={className}>
      <NativeSwitch
        trackColor={{ false: colors.input, true: colors.primary }}
        thumbColor={isEnabled ? colors.background : colors.background}
        ios_backgroundColor={colors.input}
        value={value}
        {...props}
      />
    </View>
  );
};

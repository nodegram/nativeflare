import type { SwitchProps as NativeSwitchProps } from 'react-native';
import { Switch as NativeSwitch, View } from 'react-native';
import { useThemeColors } from '../hooks/use-theme-colors';

export function Switch({ value, className, ...props }: NativeSwitchProps): JSX.Element {
  const colors = useThemeColors();
  const isEnabled = Boolean(value);

  return (
    <View className={className}>
      <NativeSwitch
        ios_backgroundColor={colors.input}
        thumbColor={isEnabled ? colors.background : colors.background}
        trackColor={{ false: colors.input, true: colors.primary }}
        value={value}
        {...props}
      />
    </View>
  );
}

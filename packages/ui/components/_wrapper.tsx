import { type ReactNode, createContext } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { vars } from 'nativewind';
import { Colors } from '../config/colors';
import { getThemeSettings } from '../lib/utils';

export const ThemeColorsContext = createContext(Colors.light);

export function UIWrapper({ children }: { children: ReactNode }): JSX.Element {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const theme = vars(getThemeSettings(colors));

  return (
    <ThemeColorsContext.Provider value={colors}>
      <View className="bg-background" style={[theme, StyleSheet.absoluteFill]}>
        {children}
      </View>
    </ThemeColorsContext.Provider>
  );
}

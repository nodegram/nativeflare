import { useContext } from 'react';
import { ThemeColorsContext } from '../components/_wrapper';

export const useThemeColors = (): Record<string, string> => {
  const themeColors = useContext(ThemeColorsContext);

  if (!themeColors) {
    throw new Error('useThemeColors must be used within a ThemeColorsProvider');
  }

  return themeColors;
};

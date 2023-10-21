import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type ThemeKey = `--${string}`;
export type ThemeValue = string;

export const getThemeSettings = (theme: Record<string, string>) =>
  Object.keys(theme).reduce(
    (acc, key) => {
      const newKey: ThemeKey = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      acc[newKey] = theme[key];
      return acc;
    },
    {} as Record<ThemeKey, ThemeValue>
  );

import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export type ThemeKey = `--${string}`;
export type ThemeValue = string;

export const getThemeSettings = (theme: Record<string, string>) =>
  Object.keys(theme).reduce<Record<ThemeKey, ThemeValue>>((acc, key) => {
    const newKey: ThemeKey = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    acc[newKey] = theme[key];
    return acc;
  }, {});

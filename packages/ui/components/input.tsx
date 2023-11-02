import React, { useState, forwardRef } from 'react';
import type { TextInputProps } from 'react-native';
import { Platform, View, TextInput } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { useThemeColors } from '../hooks/use-theme-colors';
import { cn } from '../lib/utils';

const inputVariants = cva(
  'flex flex-row h-9 w-full rounded-md border border-input bg-transparent px-4 py-2 shadow-sm transition-colors',
  {
    variants: {
      variant: {
        default: '',
        destructive: '',
        outline: '',
        secondary: '',
        ghost: '',
        link: '',
      },
      size: {
        sm: 'h-11',
        md: 'h-12',
        lg: 'h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface InputProps extends TextInputProps, VariantProps<typeof inputVariants> {}

const Input = forwardRef<TextInput, InputProps>(({ className, variant, size, ...props }, ref) => {
  const colors = useThemeColors();
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  return (
    <View className={cn(inputVariants({ variant, size, className }), isFocused && 'border-ring')}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        editable
        onBlur={onBlur}
        onFocus={onFocus}
        placeholderTextColor={colors.input}
        ref={ref}
        spellCheck={false}
        style={{
          flex: 1,
          color: colors.foreground,
          ...(Platform.OS === 'web' ? { outline: 'none' } : {}),
        }}
        {...props}
      />
    </View>
  );
});
Input.displayName = 'Input';

export { Input };

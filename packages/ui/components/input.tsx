import React, { useState } from 'react';
import { Platform, TextInput, TextInputProps, View } from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { useThemeColors } from '@/hooks/useThemeColors';

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

const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    const colors = useThemeColors();
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View className={cn(inputVariants({ variant, size, className }), isFocused && 'border-ring')}>
        <TextInput
          editable
          ref={ref}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="none"
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholderTextColor={colors.input}
          style={{
            flex: 1,
            color: colors.foreground,
            ...(Platform.OS === 'web' ? { outline: 'none' } : {}),
          }}
          {...props}
        />
      </View>
    );
  }
);
Input.displayName = 'Input';

export { Input };

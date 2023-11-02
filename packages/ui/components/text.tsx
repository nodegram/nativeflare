import type { TextProps as NativeTextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const textVariants = cva('leading-none', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    variant: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      destructive: 'text-destructive',
      accent: 'text-accent',
      hint: 'text-foreground opacity-50',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
      semibold: 'font-semibold',
    },
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    weight: 'normal',
    textAlign: 'left',
  },
});

export interface TextProps extends NativeTextProps, VariantProps<typeof textVariants> {}

export function Text({
  children,
  className = '',
  size,
  variant,
  weight,
  ...props
}: TextProps): JSX.Element {
  return (
    <NativeText className={cn(textVariants({ size, variant, weight, className }))} {...props}>
      {children}
    </NativeText>
  );
}

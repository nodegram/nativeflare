import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const headingVariants = cva('font-bold', {
  variants: {
    variant: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-md',
    },
    accent: {
      default: 'text-foreground',
      secondary: 'text-secondary',
      destructive: 'text-destructive',
    },
  },
  defaultVariants: {
    variant: 'h1',
    accent: 'default',
  },
});

export interface HeadingProps extends TextProps, VariantProps<typeof headingVariants> {}

export function Heading({
  className = '',
  children,
  variant,
  accent,
  ...props
}: HeadingProps): JSX.Element {
  return (
    <NativeText className={cn(headingVariants({ variant, accent, className }))} {...props}>
      {children}
    </NativeText>
  );
}

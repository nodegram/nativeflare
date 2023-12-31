import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';
import type { HeadingProps } from './heading';
import type { TextProps } from './text';
import { Heading } from './heading';
import { Text } from './text';

const alertVariants = cva(
  'relative w-full rounded-lg border border-border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps extends ViewProps, VariantProps<typeof alertVariants> {}

function Alert({ className, variant, ...props }: AlertProps): JSX.Element {
  return <View className={cn(alertVariants({ variant }), className)} role="alert" {...props} />;
}

function AlertIcon({ className, ...props }: ViewProps): JSX.Element {
  return (
    <View
      className={cn('absolute left-4 top-4 w-4 h-4 flex flex-row items-end', className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: HeadingProps): JSX.Element {
  return (
    <Heading
      className={cn('pl-7 mb-1 font-medium leading-none tracking-tight', className)}
      variant="h5"
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: TextProps): JSX.Element {
  return <Text className={cn('pl-7', className)} size="sm" {...props} />;
}

export { Alert, AlertIcon, AlertTitle, AlertDescription };

import { View, ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

import { Text, TextProps } from './text';
import { Heading, HeadingProps } from './heading';

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

const Alert = ({ className, variant, ...props }: AlertProps) => (
  <View role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);

const AlertTitle = ({ className, ...props }: HeadingProps) => (
  <Heading
    variant="h5"
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
);

const AlertDescription = ({ className, ...props }: TextProps) => (
  <Text size="sm" className={className} {...props} />
);

export { Alert, AlertTitle, AlertDescription };

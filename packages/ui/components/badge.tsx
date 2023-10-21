import { View, ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Text } from './text';

const badgeVariants = cva(
  'flex web:inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive shadow hover:bg-destructive/80',
        outline: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const textVariants = cva('font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps extends ViewProps, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, children, ...props }: BadgeProps) => {
  return (
    <View className={cn(badgeVariants({ variant }), className)} {...props}>
      <Text size="xs" className={cn(textVariants({ variant }))}>
        {children}
      </Text>
    </View>
  );
};

export { Badge, badgeVariants };

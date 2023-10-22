import { Image, ImageProps, View, ViewProps } from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../lib/utils';

const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-10 w-10',
      md: 'h-12 w-12',
      lg: 'h-16 w-16',
      xl: 'h-24 w-24',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface AvatarProps extends ViewProps, VariantProps<typeof avatarVariants> {}

const Avatar = ({ className, size, ...props }: AvatarProps) => (
  <View className={cn(avatarVariants({ size, className }))} {...props} />
);

const AvatarImage = ({ className, ...props }: ImageProps) => (
  <Image className={cn('aspect-square h-full w-full', className)} {...props} />
);

const AvatarFallback = ({ className, ...props }: ViewProps) => (
  <View
    className={cn('flex h-full w-full items-center justify-center bg-muted w-', className)}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };

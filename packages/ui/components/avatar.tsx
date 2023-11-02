import type { ImageProps, ViewProps } from 'react-native';
import { Image, View } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
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

function Avatar({ className, size, ...props }: AvatarProps): JSX.Element {
  return <View className={cn(avatarVariants({ size, className }))} {...props} />;
}

function AvatarImage({ className, ...props }: ImageProps): JSX.Element {
  return <Image className={cn('aspect-square h-full w-full', className)} {...props} />;
}

function AvatarFallback({ className, ...props }: ViewProps): JSX.Element {
  return (
    <View
      className={cn('flex h-full w-full items-center justify-center bg-muted w-', className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };

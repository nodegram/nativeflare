import { View, ViewProps } from 'react-native';

import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: ViewProps) {
  return <View className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export { Skeleton };

import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { cn } from '../lib/utils';

function Skeleton({ className, ...props }: ViewProps): JSX.Element {
  return <View className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export { Skeleton };

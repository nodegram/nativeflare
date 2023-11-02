import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { cn } from '../lib/utils';

export function Separator({ className, ...props }: ViewProps): JSX.Element {
  return <View className={cn('border-border border-b', className)} {...props} />;
}

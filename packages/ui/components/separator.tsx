import { View, ViewProps } from 'react-native';

import { cn } from '../lib/utils';

export const Separator = ({ className, ...props }: ViewProps) => (
  <View className={cn('border-border border-b', className)} {...props} />
);

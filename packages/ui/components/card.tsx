import { TextProps, View, ViewProps } from 'react-native';

import { cn } from '@/lib/utils';

import { Text } from './text';
import { Heading } from './heading';

const Card = ({ className, ...props }: ViewProps) => (
  <View
    className={cn('rounded-xl border border-border bg-card shadow p-2', className)}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: ViewProps) => (
  <View className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
);

const CardTitle = ({ className, ...props }: TextProps) => (
  <Heading
    variant="h3"
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: TextProps) => (
  <Text variant="hint" size="sm" {...props} />
);

const CardContent = ({ className, ...props }: ViewProps) => (
  <View className={cn('p-6 pt-0', className)} {...props} />
);

const CardFooter = ({ className, ...props }: ViewProps) => (
  <View className={cn('flex flex-row items-center p-6 pt-0', className)} {...props} />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

import type { TextProps, ViewProps } from 'react-native';
import { View } from 'react-native';
import { cn } from '../lib/utils';
import { Text } from './text';
import { Heading } from './heading';

function Card({ className, ...props }: ViewProps): JSX.Element {
  return (
    <View
      className={cn('rounded-xl border border-border bg-card shadow p-2', className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ViewProps): JSX.Element {
  return <View className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

function CardTitle({ className, ...props }: TextProps): JSX.Element {
  return (
    <Heading
      className={cn('font-semibold leading-none tracking-tight', className)}
      variant="h3"
      {...props}
    />
  );
}

function CardDescription({ ...props }: TextProps): JSX.Element {
  return <Text size="sm" variant="hint" {...props} />;
}

function CardContent({ className, ...props }: ViewProps): JSX.Element {
  return <View className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }: ViewProps): JSX.Element {
  return <View className={cn('flex flex-row items-center p-6 pt-0', className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

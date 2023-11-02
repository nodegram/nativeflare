import { Text } from 'react-native';
import type { TextProps } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const labelVariants = cva('text-foreground font-medium leading-none');

export function Label({ className, ...props }: TextProps): JSX.Element {
  return <Text className={cn(labelVariants(), className)} {...props} />;
}

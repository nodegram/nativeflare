import { Text, TextProps } from 'react-native';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva('text-foreground font-medium leading-none');

export const Label = ({ className, ...props }: TextProps) => (
  <Text className={cn(labelVariants(), className)} {...props} />
);

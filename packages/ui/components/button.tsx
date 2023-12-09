import { useContext, createContext } from 'react';
import {
  View,
  Pressable,
  ActivityIndicator,
  Text as NativeText,
  type ViewProps,
  type TextProps as NativeTextProps,
  type ActivityIndicatorProps,
  type PressableProps,
} from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const DEFAULT_SIZE = 'md';
const DEFAULT_VARIANT = 'default';

const buttonVariants = cva(
  'flex items-center justify-center rounded-md transition-colors relative',
  {
    variants: {
      variant: {
        default: 'bg-primary shadow hover:bg-primary/90',
        destructive: 'bg-destructive shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-transparent shadow-sm hover:bg-accent',
        secondary: 'bg-secondary shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent',
      },
      size: {
        sm: 'h-10 rounded-md px-4',
        md: 'h-11 px-8 py-2',
        lg: 'h-12 rounded-md px-10',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: DEFAULT_VARIANT,
      size: DEFAULT_SIZE,
    },
  }
);

export interface ButtonProps extends ViewProps, VariantProps<typeof buttonVariants> {
  onPress?: PressableProps['onPress'];
  /** @deprecated fallback for copying web-first code - use `onPress` instead */
  onClick?: PressableProps['onPress'];
  disabled?: boolean;
  title?: string;
  busy?: boolean;
}

const ButtonContext = createContext<VariantProps<typeof buttonVariants>>({
  variant: DEFAULT_VARIANT,
  size: DEFAULT_SIZE,
});

function Button({
  className,
  onClick,
  onPress,
  variant,
  size,
  title,
  busy,
  children,
  ...props
}: ButtonProps): JSX.Element {
  const isTextOnlyButton = title || typeof children === 'string';

  if (busy) {
    props.disabled = true;
  }

  return (
    <ButtonContext.Provider value={{ variant, size }}>
      <Pressable
        className={cn(
          buttonVariants({ variant, size, className }),
          props.disabled && 'cursor-not-allowed'
        )}
        onPress={onPress || onClick}
        {...props}
      >
        {({ pressed }) => (
          <>
            <View className={cn(busy && 'opacity-0', pressed && 'opacity-70')}>
              {isTextOnlyButton ? (
                <ButtonText size={size} variant={variant}>
                  {title || children}
                </ButtonText>
              ) : (
                children
              )}
            </View>
            {busy ? <ButtonLoader size="small" /> : null}
          </>
        )}
      </Pressable>
    </ButtonContext.Provider>
  );
}

const buttonTextVariants = cva(
  'text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground web:[&>div>svg>circle]:!stroke-primary-foreground',
        destructive:
          'text-destructive-foreground web:[&>div>svg>circle]:!stroke-destructive-foreground',
        outline: 'text-foreground web:[&>div>svg>circle]:!stroke-foreground',
        secondary: 'text-secondary-foreground web:[&>div>svg>circle]:!stroke-secondary-foreground',
        ghost: 'text-foreground web:[&>div>svg>circle]:!stroke-foreground',
        link: 'text-primary hover:underline web:[&>div>svg>circle]:!stroke-primary',
      },
      size: {
        sm: 'text-base',
        md: 'pt-0.5 web:pt-0',
        lg: 'pt-0.5 web:pt-0',
        icon: '',
      },
    },
    defaultVariants: {
      variant: DEFAULT_VARIANT,
      size: DEFAULT_SIZE,
    },
  }
);

interface ButtonTextProps extends NativeTextProps, VariantProps<typeof buttonTextVariants> {}

function ButtonText({ className, ...props }: ButtonTextProps): JSX.Element {
  const buttonContext = useContext(ButtonContext);
  const { variant, size } = buttonContext;
  return <NativeText className={cn(buttonTextVariants({ variant, size, className }))} {...props} />;
}

interface ButtonLoaderProps
  extends Omit<ActivityIndicatorProps, 'size'>,
    VariantProps<typeof buttonTextVariants> {}

function ButtonLoader({
  className,
  ...props
}: Omit<ButtonLoaderProps, 'size'> & {
  size?: ActivityIndicatorProps['size'];
}): JSX.Element {
  const buttonContext = useContext(ButtonContext);

  const { variant } = buttonContext;
  return (
    <View className="absolute native:top-[-9px]">
      <ActivityIndicator className={cn(buttonTextVariants({ variant, className }))} {...props} />
    </View>
  );
}

export { Button, ButtonText, ButtonLoader, buttonVariants };
